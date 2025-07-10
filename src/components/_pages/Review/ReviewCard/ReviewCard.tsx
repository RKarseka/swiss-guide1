import classes from './ReviewCard.module.scss';
import Image from 'next/image';
import React from 'react';

export function ReviewCard() {
  return (
    <div className={classes.card}>
      <div className={classes.photo}>
        <Image src={`/images/reviews/01.jpg`} alt={'clients'} fill />
      </div>
      <div className={classes.text}>
        <p className={classes.general}>
          Anna was wonderful. She was very knowledgeable, kind and fun. She took the
          time to listen to what we wanted to see and do on our tour and worked to
          make it happen. We loved the cheese shop she took us to, and learning all
          about the history of the city.
        </p>
        <div className={classes.author}>
          <p>Daniel</p>
          <p>Geneva</p>
        </div>
      </div>
    </div>
  );
}
