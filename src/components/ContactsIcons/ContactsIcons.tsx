import cx from 'clsx';
import InstagramIcon from '@/assets/img/icons/contactsIcons/instagram.svg';
import SmsIcon from '@/assets/img/icons/contactsIcons/sms.svg';
import PhoneIcon from '@/assets/img/icons/contactsIcons/phone.svg';
import WhatsappIcon from '@/assets/img/icons/contactsIcons/whatsapp.svg';
import EmailIcon from '@/assets/img/icons/contactsIcons/email.svg';
import classes from './ContactsIcons.module.scss';

type Props = {
  classNames?: string;
};

export default function ContactsIcons({ classNames }: Props) {
  const ContactsIconsData = [
    {
      label: 'Instagram',
      link: 'https://www.instagram.com/swiss_guide/',
      icon: <InstagramIcon />,
    },
    {
      label: 'SMS',
      link: 'https://www.instagram.com/swiss_guide/',
      icon: <SmsIcon />,
    },
    {
      label: 'Phone',
      link: 'https://www.instagram.com/swiss_guide/',
      icon: <PhoneIcon />,
    },
    {
      label: 'Whatsapp',
      link: 'https://www.instagram.com/swiss_guide/',
      icon: <WhatsappIcon />,
    },
    {
      label: 'Email',
      link: 'https://www.instagram.com/swiss_guide/',
      icon: <EmailIcon />,
    },
  ];
  return (
    <div className={cx(classes.contacts, classNames)}>
      {ContactsIconsData.map(({ label, link, icon }) => (
        <a className={classes.link} key={label} href={link} aria-label={label}>
          {icon}
        </a>
      ))}
    </div>
  );
}
