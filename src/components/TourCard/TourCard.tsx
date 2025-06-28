'use client';

import Image from 'next/image';
import Link from 'next/link';
import classes from './TourCard.module.scss';

interface TourCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
}

const TourCard = ({
  id,
  title,
  description,
  price,
  duration,
  image,
  difficulty,
}: TourCardProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image src={image} alt={title} fill className={classes.image} />
        <div className={classes.difficulty}>{difficulty}</div>
      </div>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <div className={classes.details}>
          <div className={classes.duration}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
                fill='currentColor'
              />
              <path
                d='M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z'
                fill='currentColor'
              />
            </svg>
            {duration}
          </div>
          <div className={classes.price}>{price} CHF</div>
        </div>
        <Link href={`/tours/${id}`} className={classes.button}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
