import classes from './SectionComponent.module.scss';
import cx from 'clsx';
import Link from 'next/link';

type Props = {
  header?: string;
  children?: React.ReactNode;
  button?: {
    link: string;
    label: string;
  };
};

function SectionComponent({ children, header, button }: Props) {
  return (
    <section className={cx('container', classes.section)}>
      <div className={classes.header}>
        <h2>{header}</h2>
        {button && <Link href={button.link}>{button.label}</Link>}{' '}
      </div>
      {children}
    </section>
  );
}
export default SectionComponent;
