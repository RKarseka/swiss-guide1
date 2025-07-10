import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { ReviewCard } from '@/components/_pages/Review/ReviewCard/ReviewCard';
import classes from './ReviewPage.module.scss';

const reviews = new Array(5).fill('').map((_, i) => ({
  id: i,
}));

export function ReviewPage() {
  return (
    <SectionComponent header={'Reviews'}>
      <div className={classes.reviewBlock}>
        {reviews.map(({ id }) => (
          <ReviewCard key={id} />
        ))}
      </div>
    </SectionComponent>
  );
}
