'use client';
import Link from 'next/link';
import cx from 'clsx';
import styles from './Breadcrumbs.module.scss';
import { usePathname } from 'next/navigation';

interface BreadcrumbsProps {
  title: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  const pathname = usePathname();
  const breadcrumbs = pathname.split('/');
  const breadcrumbsArr = [
    { href: '/', label: 'Main page' },
    ...breadcrumbs
      .slice(2, -1)
      .map((item) => ({ href: '/' + item, label: item.charAt(0).toUpperCase() + item.slice(1) })),
    { href: '/current', label: title },
  ];
  return (
    <nav className={styles.breadcrumbs}>
      <ol>
        {breadcrumbsArr.map((item, index) => (
          <li key={item.href}>
            {item.href && index < breadcrumbsArr.length - 1 ? (
              <>
                <Link href={item.href}>{item.label}</Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
