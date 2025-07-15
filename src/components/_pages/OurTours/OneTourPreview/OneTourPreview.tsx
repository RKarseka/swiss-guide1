import cx from 'clsx';
import classes from './OneTourPreview.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/assets/types/types';

type TourPreview = {
  id: string;
  titlePreview: string;
  description: string;
  mainText: string;
  fullWidth?: boolean;
};

type Props = { tour: Tour };

export default function OneTourPreview({ tour }: Props) {
  const { key, pdescription, description, ptitle, title, fullWidth } = tour;
  return (
    <Link
      href={`/tours/${key}`}
      className={cx(classes.tourCard, fullWidth && classes.fullWidth)}
    >
      <div className={classes.imageWrapper}>
        <Image
          src={`/images/tours/01.jpg`}
          alt={ptitle || title || 'tour logo'}
          fill
          className={classes.image}
        />
      </div>
      <div className={classes.tourInfo}>
        <div>
          <h3>{ptitle || title}</h3>
          <p>{pdescription || description}</p>
        </div>
      </div>
    </Link>
  );
}
