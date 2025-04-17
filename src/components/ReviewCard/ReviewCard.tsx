'use client';

import Image from 'next/image';
import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

export default function ReviewCard({ name, location, text, image }: ReviewCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={`${name} from ${location}`} width={300} height={200} className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{text}</p>
        <div className={styles.author}>
          <p className={styles.name}>{name}</p>
          <p className={styles.location}>{location}</p>
        </div>
      </div>
    </div>
  );
}
