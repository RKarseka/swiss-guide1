'use client';

import OneTourPreview from '@/components/_pages/OurTours/OneTourPreview/OneTourPreview';
import classes from './ToursPreview.module.scss';
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { useTranslations } from 'next-intl';
import { useNotionData } from '@/notion/NotionDataProvider';
import { Tour } from '@/assets/types/types';

export default function ToursPreview() {
  const t = useTranslations('ToursPage');
  const { tourData } = useNotionData();

  return (
    <SectionComponent header={t('title')}>
      <div className={classes.grid}>
        {tourData.slice(0, 5).map((tour: Tour) => (
          <OneTourPreview key={tour.key} tour={tour}></OneTourPreview>
        ))}
      </div>
    </SectionComponent>
  );
}
