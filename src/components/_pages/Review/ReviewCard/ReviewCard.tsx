import classes from './ReviewCard.module.scss';
import Image from 'next/image';
import React from 'react';
import { Review } from '@/assets/types/types';

type Props = { review: Omit<Review, 'key'> };

export function ReviewCard({ review }: Props) {
  const { description, client, place } = review;
  return (
    <div className={classes.card}>
      <div className={classes.photo}>
        <Image src={`/images/reviews/01.jpg`} alt={'clients'} fill />
      </div>
      <div className={classes.text}>
        <p className={classes.general}>{description}</p>
        <div className={classes.author}>
          <p>{client}</p>
          <p>{place}</p>
        </div>
      </div>
    </div>
  );
}
