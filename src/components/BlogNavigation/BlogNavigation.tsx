'use client';

import Link from 'next/link';
import classes from './BlogNavigation.module.scss';

interface BlogNavigationProps {
  prevArticle?: { id: string; title: string };
  nextArticle?: { id: string; title: string };
}

export default function BlogNavigation({
  prevArticle,
  nextArticle,
}: BlogNavigationProps) {
  return (
    <div className={classes.navigation}>
      {prevArticle ? (
        <Link href={`/blogs/${prevArticle.id}`} className={classes.link}>
          <span className={classes.label}>PREVIOUS ARTICLE</span>
        </Link>
      ) : (
        <div />
      )}

      {nextArticle ? (
        <Link href={`/blogs/${nextArticle.id}`} className={classes.link}>
          <span className={classes.label}>NEXT ARTICLE</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
