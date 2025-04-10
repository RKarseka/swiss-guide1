'use client';

import { useTranslations } from '../hooks/useTranslations';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Swiss Guide. Все права защищены.</p>
      </div>
    </footer>
  );
} 