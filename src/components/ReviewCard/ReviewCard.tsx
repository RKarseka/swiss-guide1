'use client';

import Image from 'next/image';
import classes from './ReviewCard.module.scss';

interface ReviewCardProps {
  name: string;
  location: string;
  text: string;
  image: string;
}

export default function ReviewCard({
  name,
  location,
  text,
  image,
}: ReviewCardProps) {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={image}
          alt={`${name} from ${location}`}
          width={300}
          height={200}
          className={classes.image}
        />
      </div>
      <div className={classes.content}>
        <p className={classes.text}>{text}</p>
        <div className={classes.author}>
          <p className={classes.name}>{name}</p>
          <p className={classes.location}>{location}</p>
        </div>
      </div>
    </div>
  );
}
