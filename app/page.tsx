'use client';

import Link from 'next/link';
import { useLanguage } from './i18n/LanguageContext';
import styles from './page.module.scss';
import commonStyles from './styles/common.module.scss';

export default function Home() {
  const { translations } = useLanguage();

  return (
    <main className={styles.main}>
      <div className={commonStyles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {translations.home.title}
          </h1>
          <p className={styles.description}>
            {translations.home.description}
          </p>
          <Link 
            href="/tours" 
            className={styles.button}
          >
            {translations.home.viewTours}
          </Link>
        </div>
      </div>
    </main>
  );
}
