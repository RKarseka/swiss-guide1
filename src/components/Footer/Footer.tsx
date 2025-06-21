'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import ContactsIcons from '@/components/ContactsIcons/ContactsIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <h3 className={styles.title}>Swiss Guide</h3>
            <p className={styles.description}>
              Ваш надежный гид по Швейцарии. Мы предлагаем уникальные туры и
              экскурсии по самым красивым местам страны.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Навигация</h3>
            <ul className={styles.links}>
              <li>
                <Link href='/'>Главная</Link>
              </li>
              <li>
                <Link href='/tours'>Туры</Link>
              </li>
              <li>
                <Link href='/about'>О нас</Link>
              </li>
              <li>
                <Link href='/reviews'>Отзывы</Link>
              </li>
              <li>
                <Link href='/blogs'>Блог</Link>
              </li>
              <li>
                <Link href='/contact'>Контакты</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Контакты</h3>
            <ul className={styles.contacts}>
              <li>
                <a href='tel:+1234567890'>+1 (234) 567-890</a>
              </li>
              <li>
                <a href='mailto:info@swissguide.com'>info@swissguide.com</a>
              </li>
              <li>
                <address>Швейцария, Цюрих, Bahnhofstrasse 1</address>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Социальные сети</h3>
            <ContactsIcons />
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Swiss Guide. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
