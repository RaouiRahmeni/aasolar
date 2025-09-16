// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./[locale]/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A.A Solar",
  description: "Capital Lights The Future of Solar Energy in Saudi Arabia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
