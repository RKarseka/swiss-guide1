import styles from './page.module.scss';
import BlogCard from '@/components/BlogCard/BlogCard';

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

export default function BlogsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}
