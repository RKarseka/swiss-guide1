'use client';

import { useRouter } from 'next/navigation';
import styles from '../not-found.module.scss';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className={styles.link}>
      Вернуться на главную
    </button>
  );
} 