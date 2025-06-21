import type { Metadata } from 'next';
import { Noto_Sans, Philosopher, Mulish } from 'next/font/google';
import '@/styles/main.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './layout.module.scss';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMetadata } from '@/i18n/metadata';

// const notoSans = Noto_Sans({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// });

const philosopher = Philosopher({
  weight: ['700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const mainFont = Mulish({
  weight: ['600'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return getMetadata(locale);
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={mainFont.className}>
        <NextIntlClientProvider locale={locale}>
          <div className={styles.wrapper}>
            <Navbar />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
