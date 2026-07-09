import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Electric Problems? | ASAP Auto Electrics Ringwood",
  description:
    "Fast, expert auto electrical service and repair from ASAP Auto Electrics in Ringwood, servicing Melbourne's Eastern Suburbs.",
  metadataBase: new URL("https://asapauto.com.au")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
