'use client';

import { useState } from 'react';
import Button from '@/components/Button/Button';
import BookingModal from '@/components/BookingModal/BookingModal';

export default function BookNow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>BOOK NOW</Button>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
