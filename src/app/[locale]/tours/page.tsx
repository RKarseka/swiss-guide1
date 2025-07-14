import PageLayout from '@/components/PageLayout/PageLayout';
import ToursPreview from '@/components/_pages/OurTours/ToursPreview/ToursPreview';
import { useTranslations } from 'next-intl';
import { ContactsSection } from '@/components/ContactsSection/ContactsSection';
import ReviewsPreview from '@/components/_sliders/reviews/ReviewsPreview/ReviewsPreview';

export default function ToursPage() {
  const t = useTranslations('ToursPage');
  return (
    <PageLayout title={t('title')}>
      <ToursPreview />
      <ContactsSection />
      <ReviewsPreview />
    </PageLayout>
  );
}
