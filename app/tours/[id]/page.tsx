'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { tours } from '../../types/tour';
import styles from './page.module.scss';
import { useLanguage } from '../../i18n/LanguageContext';
import BookingModal from '../../components/BookingModal';

const TourPage: FC = () => {
  const { id } = useParams();
  const { translations: t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return (
      <div className={styles.error}>
        <h1>{t.common.notFound}</h1>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src={tour.imageUrl}
            alt={t.tours.items[tour.id]?.title || ''}
            fill
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{t.tours.items[tour.id]?.title}</h1>
          <div className={styles.details}>
            <span className={styles.duration}>{t.common.duration}: {tour.duration}</span>
            <span className={styles.price}>{t.common.price}: {tour.price}</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.tours.sections.description}</h2>
          <p className={styles.description}>{t.tours.items[tour.id]?.fullDescription}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.tours.sections.includes}</h2>
          <ul className={styles.list}>
            {tour.includes.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.tours.sections.schedule}</h2>
          <ul className={styles.schedule}>
            {tour.schedule.map((item, index) => (
              <li key={index} className={styles.scheduleItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <button 
          className={styles.bookButton}
          onClick={() => setIsModalOpen(true)}
        >
          {t.common.book}
        </button>

        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tourTitle={t.tours.items[tour.id]?.title || ''}
          tourPrice={tour.price}
          tourDuration={tour.duration}
        />
      </div>
    </main>
  );
};

export default TourPage; 