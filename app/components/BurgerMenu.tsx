'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './BurgerMenu.module.scss';

const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { translations } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Блокируем/разблокируем прокрутку страницы
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.burger}>
      <button 
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <nav className={styles.menu} onClick={e => e.stopPropagation()}>
            <div className={styles.menuHeader}>
              <Link href="/" className={styles.logo} onClick={closeMenu}>
                {translations.common.siteName}
              </Link>
              <button 
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>

            <div className={styles.menuLinks}>
              <Link 
                href="/" 
                className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                {translations.nav.home}
              </Link>
              <Link 
                href="/tours" 
                className={`${styles.link} ${pathname === '/tours' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                {translations.nav.tours}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu; 