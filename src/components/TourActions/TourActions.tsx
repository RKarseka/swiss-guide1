'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal/BookingModal';
import classes from './TourActions.module.scss';

export default function TourActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.actions}>
      <Link href='/tours' className={classes.backButton}>
        Назад к турам
      </Link>
      <button className={classes.bookButton} onClick={() => setIsModalOpen(true)}>
        Забронировать тур
      </button>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
