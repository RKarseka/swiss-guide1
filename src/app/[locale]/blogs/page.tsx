import PageLayout from '@/components/PageLayout/PageLayout';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';
import BlogsPage from '@/components/_pages/Blogs/BlogsPage/BlogsPage';

const blogs = [
  {
    id: '1',
    title: 'The best 5 day trips from Geneva',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/blogs/geneva-trips.jpg',
    date: '01/01/2025',
  },
  {
    id: '2',
    title: 'Lavaux Vineyard Terraces, the most picturesque location on lake Leman',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/blogs/lavaux.jpg',
    date: '01/01/2025',
  },
  {
    id: '3',
    title: 'Lavaux Vineyard Terraces, the most picturesque location on lake Leman',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/blogs/lavaux-2.jpg',
    date: '01/01/2025',
  },
  {
    id: '4',
    title: 'Planning a trip to Switzerland',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/blogs/switzerland.jpg',
    date: '01/01/2025',
  },
];

export default function Blogs() {
  return (
    <>
      <PageLayout title={'Blog'}>
        <BlogsPage />
        <OtherTours />
      </PageLayout>
    </>
  );
}
