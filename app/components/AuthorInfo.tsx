'use client';

import Image from 'next/image';
import styles from '../styles/AuthorInfo.module.scss';

export default function AuthorInfo() {
  return (
    <div className={styles.author}>
      <div className={styles.avatar}>
        <Image
          src="/images/author.jpg"
          alt="Автор блога"
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>Анна Шмидт</h3>
        <p className={styles.bio}>
          Профессиональный гид по Швейцарии с 10-летним опытом. 
          Специализируется на культурных и исторических турах. 
          Автор путеводителей и статей о Швейцарии.
        </p>
        <div className={styles.social}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
} 