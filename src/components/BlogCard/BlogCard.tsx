'use client';

import Image from 'next/image';
import Link from 'next/link';
import classes from './BlogCard.module.scss';

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function BlogCard({
  id,
  title,
  description,
  image,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/blogs/${id}`} className={classes.card}>
      <div className={classes.imageContainer}>
        <Image src={image} alt={title} fill className={classes.image} />
      </div>
      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
        <div className={classes.footer}>
          <span className={classes.date}>{date}</span>
          <span className={classes.readMore}>Read more →</span>
        </div>
      </div>
    </Link>
  );
}
