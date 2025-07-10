import cx from 'clsx';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
type Props = {
  breadcrumbs?: boolean;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function PageLayout({
  breadcrumbs = true,
  title,
  children,
  className,
}: Props) {
  return (
    <div className={cx('container', className)}>
      {breadcrumbs && <Breadcrumbs title={title}></Breadcrumbs>}
      {children}
    </div>
  );
}
