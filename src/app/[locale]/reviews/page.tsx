import PageLayout from '@/components/PageLayout/PageLayout';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';
import { ReviewPage } from '@/components/_pages/Review/ReviewPage/ReviewPage';

export default function Reviews() {
  return (
    <PageLayout title={'Reviews'}>
      <ReviewPage />
      <OtherTours />
    </PageLayout>
  );
}
