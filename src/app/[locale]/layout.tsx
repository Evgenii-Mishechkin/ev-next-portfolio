import type {Metadata} from 'next';
import '@/styles/global.css';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type {Locale} from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Evgenii Mishechkin — Frontend Developer',
  description: 'Strict, minimalistic portfolio built with Next.js'
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
