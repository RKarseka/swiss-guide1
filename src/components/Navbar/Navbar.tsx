'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './Navbar.module.scss';
import navItems from '../../assets/app-data/00header';
import { useTranslations } from 'next-intl';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const t = useTranslations('header');
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Link href='/' className={classes.logo}>
          LOGO?
        </Link>

        <button
          className={classes.menuButton}
          onClick={toggleMenu}
          aria-label='Toggle menu'
        >
          <svg
            className={`${classes.menuIcon} ${isMenuOpen ? classes.active : ''}`}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className={classes.line1}
              d='M3 12H21'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              className={classes.line2}
              d='M3 6H21'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              className={classes.line3}
              d='M3 18H21'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <div className={`${classes.menu} ${isMenuOpen ? classes.active : ''}`}>
          {navItems.pages.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`${classes.navLink} ${pathname === item.href ? classes.active : ''}`}
              // onClick={() => setIsMenuOpen(false)}
            >
              {t(`navbar.${item.key}`)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
