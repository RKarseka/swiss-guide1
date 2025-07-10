import classes from '@/components/ToursList/ToursList.module.scss';
import Link from 'next/link';
import ContactsIcons from '@/components/ContactsIcons/ContactsIcons';

export function ContactsSection() {
  return (
    <div className={classes.customTour}>
      <h3>Haven&apos;t found your dream tour?</h3>
      <p>Just contact us and together we will create a customized program for you</p>
      <Link href='/contact' className={'button'}>
        CONTACT
      </Link>
      <p>or</p>
      <ContactsIcons classNames={classes.contactsLinks} />
    </div>
  );
}
