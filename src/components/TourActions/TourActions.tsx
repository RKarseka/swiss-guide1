'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal/BookingModal';
import styles from './TourActions.module.scss';

export default function TourActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.actions}>
      <Link href='/tours' className={styles.backButton}>
        Назад к турам
      </Link>
      <button className={styles.bookButton} onClick={() => setIsModalOpen(true)}>
        Забронировать тур
      </button>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
