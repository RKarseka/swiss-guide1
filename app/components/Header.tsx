'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import BurgerMenu from './BurgerMenu';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Header: FC = () => {
  const pathname = usePathname();
  const { translations } = useLanguage();

  const isActive = (path: string) => {
    return pathname === path ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            {translations.common.siteName}
          </Link>
          
          <div className={styles.links}>
            <Link 
              href="/" 
              className={`${styles.link} ${isActive('/')}`}
            >
              {translations.nav.home}
            </Link>
            <Link 
              href="/tours" 
              className={`${styles.link} ${isActive('/tours')}`}
            >
              {translations.nav.tours}
            </Link>
            <Link
              href="/reviews"
              className={clsx(styles.link, {
                [styles.active]: isActive('/reviews')
              })}
            >
              Reviews
            </Link>
            <Link
              href="/blogs"
              className={clsx(styles.link, {
                [styles.active]: isActive('/blogs')
              })}
            >
              Blogs
            </Link>
            <LanguageSwitcher />
          </div>

          <div className={styles.mobileMenu}>
            <BurgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 