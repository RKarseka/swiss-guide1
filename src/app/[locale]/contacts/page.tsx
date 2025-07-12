import PageLayout from '@/components/PageLayout/PageLayout';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';
import ContactsPage from '@/components/_pages/Contacts/ContactsPage/ContactsPage';

export default Contacts;

function Contacts() {
  return (
    <PageLayout title={'Contacts'}>
      <ContactsPage />
      <OtherTours />
    </PageLayout>
  );
}
