'use client';

import { FC } from 'react';
import { tours } from '../types/tour';
import TourCard from '../components/TourCard';
import styles from './page.module.scss';

const ToursPage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши туры</h1>
        <div className={styles.grid}>
          {tours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ToursPage; 