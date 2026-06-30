import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pulsera Inteligente de Emergencia",
    template: "%s | Pulsera Inteligente de Emergencia",
  },
  description:
    "Porque en una emergencia, cada segundo cuenta. Pulseras con QR para información médica crítica al instante.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
