import type { Metadata } from "next";
import { Archivo, Playfair_Display } from "next/font/google";
import "./globals.css";

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Bowl & Fire | Nigerian rice bowls and grilled proteins",
  description:
    "Smoky jollof bowls, grilled chicken, plantain sides, and fresh drinks built for office lunch, delivery, and fast pickup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
