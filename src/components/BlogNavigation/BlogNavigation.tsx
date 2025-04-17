'use client';

import Link from 'next/link';
import styles from './BlogNavigation.module.scss';

interface BlogNavigationProps {
  prevArticle?: { id: string; title: string };
  nextArticle?: { id: string; title: string };
}

export default function BlogNavigation({ prevArticle, nextArticle }: BlogNavigationProps) {
  return (
    <div className={styles.navigation}>
      {prevArticle ? (
        <Link href={`/blogs/${prevArticle.id}`} className={styles.link}>
          <span className={styles.label}>PREVIOUS ARTICLE</span>
        </Link>
      ) : (
        <div />
      )}

      {nextArticle ? (
        <Link href={`/blogs/${nextArticle.id}`} className={styles.link}>
          <span className={styles.label}>NEXT ARTICLE</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
