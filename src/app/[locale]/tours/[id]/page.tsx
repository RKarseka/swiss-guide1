'use client';

import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout/PageLayout';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';
import { TourInfo } from '@/app/[locale]/tours/[id]/components/TourInfo/TourInfo';
import ReviewsPreview from '@/components/_sliders/reviews/ReviewsPreview/ReviewsPreview';
import { getPage } from '@/utils/helpers';
import { useNotionData } from '@/notion/NotionDataProvider';
import { Tour } from '@/assets/types/types';

export default function TourPage() {
  const params = useParams();
  const { tourData } = useNotionData();

  const id = params?.id as string;
  if (!id) return null;

  const tour = getPage<Tour>(tourData, id);
  const { title } = tour;
  console.log('const tour = ', tour);
  return (
    <PageLayout title={title}>
      <TourInfo tour={tour} id={id as string} />
      <OtherTours />
      <ReviewsPreview />
    </PageLayout>
  );
}
