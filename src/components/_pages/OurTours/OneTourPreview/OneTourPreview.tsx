import cx from 'clsx';
import classes from './OneTourPreview.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type TourPreview = {
  id: string;
  titlePreview: string;
  description: string;
  mainText: string;
  fullWidth?: boolean;
};

type Props = { tour: TourPreview; index: number };
export default function OneTourPreview({ tour, index }: Props) {
  return (
    <Link
      href={`/tours/${index}`}
      className={cx(classes.tourCard, tour.fullWidth && classes.fullWidth)}
    >
      <div className={classes.imageWrapper}>
        <Image
          src={`/images/tours/tour${index}/01.jpg`}
          alt={tour.titlePreview}
          fill
          className={classes.image}
        />
      </div>
      <div className={classes.tourInfo}>
        <div>
          <h3>{tour.titlePreview}</h3>
          <p>{tour.description}</p>
        </div>
      </div>
    </Link>
  );
}
