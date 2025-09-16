import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentry | Forge Your Legend in the Multiverse",
  description:
    "A visually dynamic web experience built with Next.js, Tailwind CSS, and GSAP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
