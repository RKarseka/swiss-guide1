'use client';

import { FC } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: FC = () => {
  const { language, setLanguage, translations } = useLanguage();

  return (
    <div className={styles.switcher}>
      <span className={styles.label}>{translations.common.language}:</span>
      <button
        className={`${styles.button} ${language === 'ru' ? styles.active : ''}`}
        onClick={() => setLanguage('ru')}
      >
        RU
      </button>
      <button
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher; 