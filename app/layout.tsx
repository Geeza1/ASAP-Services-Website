import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-reading",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Auto Electric Problems? | ASAP Auto Electrics Ringwood",
  description:
    "Fast, expert auto electrical service and repair from ASAP Auto Electrics in Ringwood, servicing Melbourne's Eastern Suburbs.",
metadataBase: new URL("https://www.asapauto.com.au"),
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
   const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="en-AU">
      <body className={inter.variable}>{children}</body>
         {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
    </html>
  );
}
