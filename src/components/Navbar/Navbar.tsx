'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Главная' },
    { href: '/tours', label: 'Туры' },
    { href: '/about', label: 'О нас' },
    { href: '/reviews', label: 'Отзывы' },
    { href: '/blogs', label: 'Блог' },
    { href: '/contact', label: 'Контакты' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Swiss Guide
        </Link>

        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href ? styles.active : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 