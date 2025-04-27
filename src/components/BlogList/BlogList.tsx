'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './BlogList.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

interface BlogListProps {
  initialBlogs?: Blog[];
}

const defaultBlogs: Blog[] = [
  {
    id: 'best-day-trips',
    title: 'THE BEST 5 DAY TRIPS FROM GENEVA',
    image: '/images/blogs/day-trips.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '01/01/2025',
  },
  {
    id: 'lavaux-terraces',
    title: 'LAVAUX VINEYARD TERRACES, THE MOST PICTURESQUE LOCATION ON LAKE LEMAN',
    image: '/images/blogs/lavaux.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '01/01/2025',
  },
  {
    id: 'planning-trip',
    title: 'PLANNING A TRIP TO SWITZERLAND',
    image: '/images/blogs/planning.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '01/01/2025',
  },
];

export default function BlogList({ initialBlogs = defaultBlogs }: BlogListProps) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    setBlogs(initialBlogs);
  }, [initialBlogs]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Latest Blog Posts</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <Link href={`/blogs/${blog.id}`} className={styles.blogCard}>
                <div className={styles.imageWrapper}>
                  <Image src={blog.image} alt={blog.title} fill className={styles.image} />
                </div>
                <div className={styles.blogInfo}>
                  <h3>{blog.title}</h3>
                  <p>{blog.description}</p>
                  <span className={styles.date}>{blog.date}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
