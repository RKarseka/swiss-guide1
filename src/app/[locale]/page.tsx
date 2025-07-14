import AboutGuide from '@/components/AboutGuide/AboutGuide';
import ToursList from '@/components/ToursList/ToursList';
import BlogsPreview from '@/components/_sliders/blog/BlogsPreview/BlogsPreview';
import MainHeader from '@/components/MainHeader/MainHeader';
import ReviewsPreview from '@/components/_sliders/reviews/ReviewsPreview/ReviewsPreview';
import PageLayout from '@/components/PageLayout/PageLayout';

export default function Home() {
  return (
    <>
      <MainHeader />
      <PageLayout title={'Main'} breadcrumbs={false}>
        <AboutGuide />
        <ToursList />
        <ReviewsPreview />
        <BlogsPreview />
      </PageLayout>
    </>
  );
}
