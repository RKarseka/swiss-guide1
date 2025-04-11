'use client';

import { FC } from 'react';
import { useTranslations } from '../hooks/useTranslations';

const ReviewsPage: FC = () => {
  const t = useTranslations();
  const reviews = t('reviews.reviews');

  return (
    <div>
      <h1>{t('reviews.title')}</h1>
      {reviews.length === 0 ? (
        <p>{t('reviews.noReviews')}</p>
      ) : (
        <>
          <h2>{t('reviews.reviewsList')}</h2>
          <ul>
            {reviews.map((review: { id: number; author: string; text: string }) => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.text}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ReviewsPage; 