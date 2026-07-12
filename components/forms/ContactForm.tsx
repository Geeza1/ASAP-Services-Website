"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck } from "lucide-react";

type ContactFormProps = {
  sourcePage?: string;
  serviceName?: string;
  heading?: string;
  submitLabel?: string;
  className?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const successMessage = "Thanks for contacting ASAP Auto Electrics. We'll get back to you as soon as possible.";
const errorMessage = "We couldn't send your enquiry. Please try again or call 03 9870 2722.";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(name: string, phone: string, email: string, vehicleIssue: string) {
  const trimmedEmail = email.trim();

  return Boolean(name.trim() && phone.trim() && emailPattern.test(trimmedEmail) && vehicleIssue.trim());
}

export function ContactForm({
  sourcePage,
  serviceName,
  heading,
  submitLabel = "Contact Us",
  className = ""
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");
  const [vehicleIssue, setVehicleIssue] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const message = status === "success" ? successMessage : status === "error" ? errorMessage : "";
  const canSubmit = useMemo(() => validateFields(name, phone, email, vehicleIssue), [name, phone, email, vehicleIssue]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          registration: registration.trim(),
          vehicleIssue: vehicleIssue.trim(),
          sourcePage,
          serviceName,
          pageUrl: window.location.href,
          website,
          startedAt
        })
      });

      const result = (await response.json()) as { ok?: boolean };

      if (!response.ok || !result.ok) {
        setStatus("error");
        return;
      }

      setName("");
      setPhone("");
      setEmail("");
      setRegistration("");
      setVehicleIssue("");
      setWebsite("");
      setStartedAt(Date.now());
      setStatus("success");
      // TODO: Add Google Ads or GA4 conversion tracking after a successful contact form submission.
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={`rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm ${className}`.trim()} onSubmit={handleSubmit}>
      {heading && <h3 className="mb-4 text-xl font-black text-slate-950">{heading}</h3>}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black">
          <span>
            Name <span className="text-asap-red" aria-label="required">*</span>
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-normal text-slate-950"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-black">
          <span>
            Phone <span className="text-asap-red" aria-label="required">*</span>
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={40}
            className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-normal text-slate-950"
            placeholder="04xx xxx xxx"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-black">
          <span>
            Email Address <span className="text-asap-red" aria-label="required">*</span>
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-normal text-slate-950"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-black">
          <span>
            Vehicle Registration <span className="font-bold text-slate-500">(optional)</span>
          </span>
          <input
            name="registration"
            type="text"
            autoComplete="off"
            maxLength={40}
            className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base font-normal uppercase text-slate-950"
            placeholder="ABC123"
            value={registration}
            onChange={(event) => setRegistration(event.target.value)}
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-black">
        <span>
          Vehicle or Issue <span className="text-asap-red" aria-label="required">*</span>
        </span>
        <textarea
          name="vehicleIssue"
          required
          maxLength={1200}
          className="min-h-28 rounded-md border border-slate-300 bg-white px-3 py-3 text-base font-normal text-slate-950"
          placeholder="Battery light on, vehicle will not start, alternator problem..."
          value={vehicleIssue}
          onChange={(event) => setVehicleIssue(event.target.value)}
        />
      </label>

      <label className="absolute -left-[9999px] h-px w-px overflow-hidden">
        Website
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </label>

      <input type="hidden" name="startedAt" value={startedAt} />

      {message && (
        <p className={`mt-4 text-sm font-bold ${status === "success" ? "text-asap-purple" : "text-asap-red"}`} role={status === "success" ? "status" : "alert"} aria-live="polite">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-asap-cyan px-6 font-black text-slate-950 transition hover:bg-asap-purple hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        <CalendarCheck aria-hidden size={20} />
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
