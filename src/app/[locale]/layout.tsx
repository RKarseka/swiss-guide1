import type { Metadata } from 'next';
import { Mulish, Philosopher } from 'next/font/google';
import '@/styles/main.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import classes from './layout.module.scss';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMetadata } from '@/i18n/metadata';
import { getPages, parseNotionPages } from '@/notion/index';
import NotionDataProvider from '@/notion/NotionDataProvider';

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
  return await getMetadata(locale);
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const reviewData = parseNotionPages(await getPages());

  return (
    <html lang={locale}>
      <body className={mainFont.className}>
        <NextIntlClientProvider locale={locale}>
          <NotionDataProvider data={{ reviewData }}>
            <div className={classes.wrapper}>
              <Navbar />
              <main className={classes.main}>{children}</main>
              <Footer />
            </div>
          </NotionDataProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
