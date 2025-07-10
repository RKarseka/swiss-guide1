import PageLayout from '@/components/PageLayout/PageLayout';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';

export default Contacts;

function Contacts() {
  return (
    <PageLayout title={'Contacts'}>
      <OtherTours />
    </PageLayout>
  );
}
