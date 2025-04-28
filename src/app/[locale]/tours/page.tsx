import PageLayout from '@/components/PageLayout/PageLayout';
import ToursPreview from '@/components/_pages/OurTours/ToursPreview/ToursPreview';
import { useTranslations } from 'next-intl';

export default function ToursPage() {
  const t = useTranslations('ToursPage');
  return (
    <PageLayout title={t('title')}>
      <ToursPreview />
    </PageLayout>
  );
}
