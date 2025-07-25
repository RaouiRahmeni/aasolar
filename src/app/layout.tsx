import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { notoKufiArabic } from "@/styles/fonts";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "A.A Solar",
  description: "مستقبل الطاقة الشمسية في السعودية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={notoKufiArabic.className}>
        {/* <Header /> */}

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
