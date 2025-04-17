import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/main.scss';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Swiss Guide - Путеводитель по Швейцарии',
  description: 'Туры и экскурсии по Швейцарии',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Navbar />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
