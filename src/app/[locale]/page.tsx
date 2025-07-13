import AboutGuide from '@/components/AboutGuide/AboutGuide';
import ToursList from '@/components/ToursList/ToursList';
import BlogList from '@/components/BlogList/BlogList';
import MainHeader from '@/components/MainHeader/MainHeader';
import ReviewsPreview from '@/components/ReviewsPreview/ReviewsPreview';
import PageLayout from '@/components/PageLayout/PageLayout';

type Props = { data: Record<string, string> };

export default function Home({ data }: Props) {
  return (
    <>
      <MainHeader />
      <PageLayout title={'Main'} breadcrumbs={false}>
        <AboutGuide />
        <ToursList />
        <ReviewsPreview />
        <BlogList />
      </PageLayout>
    </>
  );
}
