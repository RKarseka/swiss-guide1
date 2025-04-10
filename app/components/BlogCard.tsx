'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCard.module.scss';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = '/images/placeholder.jpg';

  return (
    <Link href={`/blogs/${blog.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageError ? fallbackImage : blog.imageUrl}
          alt={blog.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImageError(true)}
          priority={blog.id <= 4} // Приоритетная загрузка для первых 4 блогов
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{blog.title}</h2>
        <p className={styles.excerpt}>{blog.excerpt}</p>
        <span className={styles.date}>{blog.date}</span>
      </div>
    </Link>
  );
};

export default BlogCard; 