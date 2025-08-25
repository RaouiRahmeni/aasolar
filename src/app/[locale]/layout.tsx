import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/[locale]/globals.css";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher ";

export const metadata: Metadata = {
  title: "A.A solar",
  description: "Capital Lights The Future of Solar Energy in Saudi Arabia",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <WhatsAppButton />
          <LanguageSwitcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
