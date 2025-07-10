import AboutGuide from '@/components/AboutGuide/AboutGuide';
import ToursList from '@/components/ToursList/ToursList';
import BlogList from '@/components/BlogList/BlogList';
import MainHeader from '@/components/MainHeader/MainHeader';
import ReviewsPreview from '@/components/ReviewsPreview/ReviewsPreview';

export default function Home() {
  return (
    <>
      <MainHeader />
      <AboutGuide />
      <ToursList />
      <ReviewsPreview />
      <BlogList />
    </>
  );
}
