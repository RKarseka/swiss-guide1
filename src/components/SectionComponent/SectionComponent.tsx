import classes from './SectionComponent.module.scss';
import cx from 'clsx';
import Link from 'next/link';

type Props = {
  header?: string;
  children?: React.ReactNode;
  fields?: {
    date?: string;
  };
  button?: {
    link: string;
    label: string;
  };
};

function SectionComponent({ children, header, button, fields }: Props) {
  return (
    <section className={cx('container', classes.section)}>
      <div className={classes.header}>
        <h2>{header}</h2>
        {button && <Link href={button.link}>{button.label}</Link>}{' '}
      </div>
      <div>{fields?.date}</div>
      {children}
    </section>
  );
}
export default SectionComponent;
