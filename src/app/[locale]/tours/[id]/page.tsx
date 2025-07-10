'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import PageLayout from '@/components/PageLayout/PageLayout';
import { toursData } from '@/assets/app-data/05tours';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';
import { TourInfo } from '@/app/[locale]/tours/[id]/components/TourInfo/TourInfo';
import ReviewsPreview from '@/components/ReviewsPreview/ReviewsPreview';

export default function TourPage() {
  const params = useParams();
  const id = params?.id;
  if (!id) return null;
  const tour = toursData[+id];
  const { title } = tour;

  return (
    <PageLayout title={title}>
      <TourInfo tour={tour} id={id as string} />
      <OtherTours />
      <ReviewsPreview />
    </PageLayout>
  );
}
