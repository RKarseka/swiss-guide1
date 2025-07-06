import AboutGuide from '@/components/AboutGuide/AboutGuide';
import ToursList from '@/components/ToursList/ToursList';
import Reviews from '@/components/Reviews/Reviews';
import BlogList from '@/components/BlogList/BlogList';
import MainHeader from '@/components/MainHeader/MainHeader';

export default function Home() {
  return (
    <main>
      <MainHeader />
      {/*<AboutGuide />*/}
      <ToursList />
      {/*<Reviews />*/}
      {/*<BlogList />*/}
    </main>
  );
}
