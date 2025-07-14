import classes from './ReviewsSlide.module.scss';
import Image from 'next/image';
import { Review } from '@/assets/types/types';

type Props = { slide: Review };

export default function ReviewsSlide({ slide }: Props) {
  return (
    <div className={classes.reviewCard}>
      <div className={classes.info}>
        <Image
          src={'/images/reviews/mini01.jpg'}
          alt={`${slide.client}'s review`}
          width={120}
          height={160}
          className={classes.image}
        />
        <div>
          <p className='name'>{slide.client}</p>
          <p className='place'>{slide.place}</p>
          <p className='date'>{slide.date}</p>
        </div>
      </div>
      <p className={classes.reviewText}>{slide.description}</p>
    </div>
  );
}
