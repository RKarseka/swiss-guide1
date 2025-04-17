'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './BlogList.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const blogs = [
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

export default function BlogList() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Blog</h2>
          <Link href='/blog' className={styles.allArticlesLink}>
            ALL ARTICLES
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.blog-button-prev',
            nextEl: '.blog-button-next',
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <article className={styles.blogCard}>
                <Link href={`/blog/${blog.id}`} className={styles.blogLink}>
                  <div className={styles.imageWrapper}>
                    <Image src={blog.image} alt={blog.title} fill className={styles.image} />
                  </div>
                  <div className={styles.blogContent}>
                    <h3 className={styles.title}>{blog.title}</h3>
                    <p className={styles.description}>{blog.description}</p>
                    <div className={styles.footer}>
                      <span className={styles.date}>{blog.date}</span>
                      <span className={styles.readMore}>Read more →</span>
                    </div>
                  </div>
                </Link>
              </article>
            </SwiperSlide>
          ))}
          <div className='blog-button-prev' />
          <div className='blog-button-next' />
        </Swiper>
      </div>
    </section>
  );
}
