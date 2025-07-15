'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { useSupabase } from '@/utils/supabase/SupabaseProvider';

export default function ReviewsPreview() {
  const data1 = useSupabase();
  return (
    <SectionComponent
      header={'Reviews'}
      button={{ link: '/reviews', label: 'ALL REVIEWS' }}
    >
      {/*<SliderComponent slideComponent={ReviewsSlide} slides={reviewData} />*/}
    </SectionComponent>
  );
}
