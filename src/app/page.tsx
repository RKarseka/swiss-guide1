import Image from 'next/image';
import styles from './page.module.css';
import AboutGuide from '@/components/AboutGuide/AboutGuide';
import ToursList from '@/components/ToursList/ToursList';
import Reviews from '@/components/Reviews/Reviews';
import BlogList from '@/components/BlogList/BlogList';

export default function Home() {
  return (
    <main>
      <AboutGuide />
      <ToursList />
      <Reviews />
      <BlogList />
    </main>
  );
}
