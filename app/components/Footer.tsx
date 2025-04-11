'use client';

import { useTranslations } from '../hooks/useTranslations';
import styles from '../styles/Footer.module.scss';
import commonStyles from '../styles/common.module.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const t = useTranslations();
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={commonStyles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3>{t('footer.about')}</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className={styles.links}>
            <h3>{t('footer.links')}</h3>
            <ul>
              <li><a href="/tours">{t('nav.tours')}</a></li>
              <li><a href="/reviews">{t('nav.reviews')}</a></li>
              <li><a href="/blogs">{t('nav.blogs')}</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>{t('footer.contact')}</h3>
            <p>{t('footer.email')}: info@swiss-guide.com</p>
            <p>{t('footer.phone')}: +41 123 456 789</p>
            <div className={styles.socialLinks}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('footer.socialMedia.facebook')}
              >
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('footer.socialMedia.instagram')}
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('footer.socialMedia.twitter')}
              >
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t('footer.socialMedia.youtube')}
              >
                <FaYoutube className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} {t('common.siteName')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
} 