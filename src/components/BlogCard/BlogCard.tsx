'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.scss';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function BlogCard({ id, title, description, image, date }: BlogCardProps) {
  return (
    <Link href={`/blogs/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{date}</span>
          <span className={styles.readMore}>Read more →</span>
        </div>
      </div>
    </Link>
  );
}
