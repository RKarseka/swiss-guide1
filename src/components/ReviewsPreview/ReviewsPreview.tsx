'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { useNotionData } from '@/notion/NotionDataProvider';
import ReviewsSlide from '@/components/_sliders/reviews/ReviewSlide/ReviewSlide';
import SliderComponent from '@/components/general/slider/SliderComponent';

export default function ReviewsPreview() {
  const { reviewData } = useNotionData();
  return (
    <SectionComponent
      header={'Reviews'}
      button={{ link: '/reviews', label: 'ALL REVIEWS' }}
    >
      <SliderComponent slideComponent={ReviewsSlide} slides={reviewData} />
    </SectionComponent>
  );
}
