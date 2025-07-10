import OneTourPreview from '@/components/_pages/OurTours/OneTourPreview/OneTourPreview';
import classes from './ToursPreview.module.scss';
import { toursData } from '@/assets/app-data/05tours';

export default function ToursPreview() {
  return (
    <div className={classes.grid}>
      {toursData.slice(0, 6).map((tour, index) => (
        <OneTourPreview key={tour.id} tour={tour} index={index}></OneTourPreview>
      ))}
    </div>
  );
}
