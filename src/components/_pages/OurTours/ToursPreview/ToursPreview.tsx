import toursData from '@/assets/app-data/05tours';
import OneTourPreview from '@/components/_pages/OurTours/OneTourPreview/OneTourPreview';
import styles from './ToursPreview.module.scss';

export default function ToursPreview() {
  return (
    <div className={styles.grid}>
      {toursData.slice(0, 6).map((tour, index) => (
        <OneTourPreview key={tour.id} tour={tour} index={index}></OneTourPreview>
      ))}
    </div>
  );
}
