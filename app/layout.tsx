import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "./components/Header";
import { LanguageProvider } from "./i18n/LanguageContext";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swiss Guide - Ваш путеводитель по Швейцарии",
  description: "Откройте для себя лучшие туры и маршруты по Швейцарии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${styles.body}`}>
        <LanguageProvider>
          <Header />
          <div className={styles.content}>
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
