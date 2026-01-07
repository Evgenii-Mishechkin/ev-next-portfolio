import type {Metadata} from 'next';
import '@/styles/global.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing, type Locale} from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Evgenii Mishechkin — Frontend Developer',
  description: 'Strict, minimalistic portfolio built with Next.js'
};

function isLocale(value: string): value is Locale {
  return routing.locales.includes(value as Locale);
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;

  const safeLocale: Locale = isLocale(locale) ? locale : routing.defaultLocale;

  const messages = await getMessages({locale: safeLocale});

  return (
    <html lang={safeLocale}>
      <body className="glass-gradient">
        <div className="app-shell">
          <NextIntlClientProvider locale={safeLocale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
