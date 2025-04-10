'use client';

import { useTranslations } from '../hooks/useTranslations';
import styles from '../styles/Footer.module.scss';
import commonStyles from '../styles/common.module.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className={commonStyles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3>О нас</h3>
            <p>Swiss Guide - ваш надежный гид по Швейцарии.</p>
          </div>
          <div className={styles.links}>
            <h3>Ссылки</h3>
            <ul>
              <li><a href="/tours">Туры</a></li>
              <li><a href="/reviews">Отзывы</a></li>
              <li><a href="/blogs">Блоги</a></li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3>Контакты</h3>
            <p>Email: info@swiss-guide.com</p>
            <p>Телефон: +41 123 456 789</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Swiss Guide. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 