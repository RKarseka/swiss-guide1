'use client';

import { FC } from 'react';
import BlogCard from '../components/BlogCard';
import AuthorInfo from '../components/AuthorInfo';
import styles from './page.module.scss';
import commonStyles from '../styles/common.module.scss';
import { useTranslations } from '../hooks/useTranslations';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const BlogsPage: FC = () => {
  const t = useTranslations();
  const blogs = t('blogs.blogs') as Blog[];

  return (
    <main className={styles.main}>
      <div className={commonStyles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{t('blogs.title')}</h1>
            {blogs.length === 0 ? (
              <p>{t('blogs.noBlogs')}</p>
            ) : (
              <>
                <h2 className={styles.subtitle}>{t('blogs.blogsList')}</h2>
                <div className={styles.grid}>
                  {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className={styles.sidebar}>
            <AuthorInfo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogsPage; 