import cx from 'clsx';
import styles from './OneTourPreview.module.scss';
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
    <Link href={`/tours/${index}`} className={cx(styles.tourCard, tour.fullWidth && styles.fullWidth)}>
      <div className={styles.imageWrapper}>
        <Image src={'/images/tours/01.jpg'} alt={tour.titlePreview} fill className={styles.image} />
      </div>
      <div className={styles.tourInfo}>
        <div>
          <h3>{tour.titlePreview}</h3>
          <p>{tour.description}</p>
        </div>
      </div>
    </Link>
  );
}
