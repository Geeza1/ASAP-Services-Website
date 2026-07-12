import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  registration?: unknown;
  vehicleIssue?: unknown;
  sourcePage?: unknown;
  serviceName?: unknown;
  pageUrl?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

const maxLengths = {
  name: 120,
  phone: 40,
  email: 180,
  registration: 40,
  vehicleIssue: 1200,
  sourcePage: 160,
  serviceName: 160,
  pageUrl: 600
};

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMaxRequests = 5;
const minimumSubmissionMs = 2000;
const rateLimitStore = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status });
}

function stringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLength(value: string, maxLength: number) {
  return value.length > 0 && value.length <= maxLength;
}

function validateOptionalLength(value: string, maxLength: number) {
  return value.length <= maxLength;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const recentRequests = (rateLimitStore.get(clientIp) || []).filter((timestamp) => now - timestamp < rateLimitWindowMs);

  if (recentRequests.length >= rateLimitMaxRequests) {
    rateLimitStore.set(clientIp, recentRequests);
    return true;
  }

  rateLimitStore.set(clientIp, [...recentRequests, now]);
  return false;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, message: "Invalid JSON request." }, 400);
  }

  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
    return jsonResponse({ ok: false, message: "Too many enquiries. Please try again later." }, 429);
  }

  const honeypot = stringValue(payload.website);

  if (honeypot) {
    return jsonResponse({ ok: true, message: "Thanks for contacting ASAP Auto Electrics." }, 200);
  }

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : Number(payload.startedAt);

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < minimumSubmissionMs) {
    return jsonResponse({ ok: false, message: "Please try submitting the form again." }, 400);
  }

  const name = stringValue(payload.name);
  const phone = stringValue(payload.phone);
  const email = stringValue(payload.email);
  const registration = stringValue(payload.registration);
  const vehicleIssue = stringValue(payload.vehicleIssue);
  const sourcePage = stringValue(payload.sourcePage);
  const serviceName = stringValue(payload.serviceName);
  const pageUrl = stringValue(payload.pageUrl);

  const errors: Record<string, string> = {};

  if (!validateLength(name, maxLengths.name)) {
    errors.name = "Name is required and must be shorter than 120 characters.";
  }

  if (!validateLength(phone, maxLengths.phone)) {
    errors.phone = "Phone is required and must be shorter than 40 characters.";
  }

  if (!validateLength(email, maxLengths.email) || !emailPattern.test(email)) {
    errors.email = "A valid email address is required.";
  }

  if (!validateOptionalLength(registration, maxLengths.registration)) {
    errors.registration = "Vehicle registration must be shorter than 40 characters.";
  }

  if (!validateLength(vehicleIssue, maxLengths.vehicleIssue)) {
    errors.vehicleIssue = "Vehicle or issue is required and must be shorter than 1200 characters.";
  }

  if (sourcePage.length > maxLengths.sourcePage) {
    errors.sourcePage = "Source page is too long.";
  }

  if (serviceName.length > maxLengths.serviceName) {
    errors.serviceName = "Service name is too long.";
  }

  if (pageUrl.length > maxLengths.pageUrl) {
    errors.pageUrl = "Page URL is too long.";
  }

  if (Object.keys(errors).length > 0) {
    return jsonResponse({ ok: false, message: "Please check the enquiry details.", errors }, 400);
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpSecureValue = process.env.SMTP_SECURE;
  const smtpSecure = smtpSecureValue === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailFrom = process.env.EMAIL_FROM;
  const emailTo = process.env.EMAIL_TO;

  if (!smtpHost || !Number.isFinite(smtpPort) || !["true", "false"].includes(smtpSecureValue || "") || !smtpUser || !smtpPass || !emailFrom || !emailTo) {
    return jsonResponse({ ok: false, message: "Email delivery is not configured." }, 500);
  }

  const submittedAt = new Date();
  const subject = "Website Enquiry - ASAP Auto Electrics";
  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    ...(registration ? [`Vehicle Registration: ${registration}`] : []),
    `Vehicle or Issue: ${vehicleIssue}`,
    `Service name: ${serviceName || "Not supplied"}`,
    `Source page URL: ${pageUrl || sourcePage || "Not supplied"}`,
    `Submission date and time: ${submittedAt.toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })}`,
    `Client IP: ${clientIp}`
  ];

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "false",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 8000,
  greetingTimeout: 8000,
  socketTimeout: 10000,
});

console.log("Creating SMTP connection...");

await transporter.verify();

console.log("SMTP VERIFIED");

// Only after verification succeeds:
await transporter.sendMail({
  // workshop email
});

  try {
    await transporter.verify();
console.log("SMTP connection verified");
    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      replyTo: email,
      subject,
      text: lines.join("\n"),
      html: `
        <h2>Website Enquiry - ASAP Auto Electrics</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${registration ? `<p><strong>Vehicle Registration:</strong> ${escapeHtml(registration)}</p>` : ""}
        <p><strong>Vehicle or Issue:</strong><br>${escapeHtml(vehicleIssue).replace(/\n/g, "<br>")}</p>
        <p><strong>Service name:</strong> ${escapeHtml(serviceName || "Not supplied")}</p>
        <p><strong>Source page URL:</strong> ${escapeHtml(pageUrl || sourcePage || "Not supplied")}</p>
        <p><strong>Submission date and time:</strong> ${escapeHtml(submittedAt.toLocaleString("en-AU", { timeZone: "Australia/Melbourne" }))}</p>
      `
    });

    const acknowledgementText = [
      `Hi ${name},`,
      "",
      "Thanks for contacting ASAP Auto Electrics.",
      "",
      "We have received your enquiry and will get back to you as soon as possible during business hours.",
      "",
      "For urgent assistance, please call our Ringwood workshop on 03 9870 2722.",
      "",
      "Regards,",
      "",
      "ASAP Auto Electrics",
      "Ringwood Auto Electrical Workshop",
      "https://asapauto.com.au"
    ].join("\n");

    try {
      await transporter.sendMail({
        from: emailFrom,
        to: email,
        subject: "We received your enquiry - ASAP Auto Electrics",
        text: acknowledgementText,
        html: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for contacting ASAP Auto Electrics.</p>
          <p>We have received your enquiry and will get back to you as soon as possible during business hours.</p>
          <p>For urgent assistance, please call our Ringwood workshop on 03 9870 2722.</p>
          <p>Regards,</p>
          <p>ASAP Auto Electrics<br>Ringwood Auto Electrical Workshop<br><a href="https://asapauto.com.au">https://asapauto.com.au</a></p>
        `
      });
      console.log("Creating SMTP connection...");

await transporter.verify();

console.log("SMTP VERIFIED");
  } catch (error) {
  console.error("=================================");
  console.error("CONTACT API ERROR");
  console.error(error);
  console.error("=================================");

  return Response.json(
    {
      success: false,
      message: "Unable to send enquiry.",
      error:
        error instanceof Error ? error.message : String(error),
    },
    { status: 500 }
  );
}

    return jsonResponse({ ok: true, message: "Enquiry sent." }, 200);
  } catch {
    return jsonResponse({ ok: false, message: "Email could not be sent." }, 500);
  }
}
