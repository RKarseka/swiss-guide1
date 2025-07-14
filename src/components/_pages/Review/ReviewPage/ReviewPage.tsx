'use client';

import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { ReviewCard } from '@/components/_pages/Review/ReviewCard/ReviewCard';
import classes from './ReviewPage.module.scss';
import { Review } from '@/assets/types/types';
import { useNotionData } from '@/notion/NotionDataProvider';

export function ReviewPage() {
  const { reviewData } = useNotionData();

  return (
    <SectionComponent header={'Reviews'}>
      <div className={classes.reviewBlock}>
        {reviewData.map(({ key, ...review }: Review) => (
          <ReviewCard key={key} review={review} />
        ))}
      </div>
    </SectionComponent>
  );
}
