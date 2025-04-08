'use client';

import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '../types/tour';
import { useTranslations } from '../hooks/useTranslations';
import styles from './TourCard.module.scss';

interface TourCardProps {
  tour: Tour;
}

const TourCard: FC<TourCardProps> = ({ tour }) => {
  const t = useTranslations();
  const tourTranslations = t.tours.items[tour.id as keyof typeof t.tours.items];

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={tour.imageUrl}
          alt={tourTranslations.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{tourTranslations.title}</h2>
        <p className={styles.description}>{tourTranslations.description}</p>
        <div className={styles.details}>
          <span className={styles.duration}>
            {t.common.duration}: {tour.duration}
          </span>
          <span className={styles.price}>
            {t.common.price}: {tour.price}
          </span>
        </div>
        <Link href={`/tours/${tour.id}`} className={styles.button}>
          {t.common.details}
        </Link>
      </div>
    </div>
  );
};

export default TourCard; 