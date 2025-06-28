'use client';

import Link from 'next/link';
import classes from './Footer.module.scss';
import ContactsIcons from '@/components/ContactsIcons/ContactsIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={'container'}>
        <div className={classes.main}>
          <div className={classes.contacts}>
            <h5>Your swiss guide</h5>
            <ContactsIcons />
          </div>
          <div className={classes.address}>
            <p>Anna Pilkevich</p>
            <p>IDE CHE-391.755.884</p>
            <a href='tel:+41765701891'>+41 76 570 18 91</a>
            <a href='mailto:anna.pilkevich@gmail.com'>anna.pilkevich@gmail.com</a>
          </div>
          <div className={classes.navigation}>
            <p>Tours</p>
            <p>Blog</p>
            <p>Reviews</p>
            <p>Privacy Policy</p>
            <p>Contacts</p>
          </div>
        </div>
        <div className={classes.bottom}>
          <p className={classes.copyright}>© {currentYear} Swiss Guide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
