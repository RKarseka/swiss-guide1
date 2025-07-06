'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import classes from './BlogList.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import blogsData from '@/assets/app-data/07blogs';

interface Blog {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

export default function BlogList() {
  // const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  //
  // useEffect(() => {
  //   setBlogs(initialBlogs);
  // }, [initialBlogs]);

  return (
    <SectionComponent
      header={'Blog'}
      button={{ link: '/blogs', label: 'ALL ARTICLES' }}
    >
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
        {blogsData.map((blog) => (
          <SwiperSlide key={blog.key}>
            <div className={classes.card}>
              <Link href={`/blogs/${blog.key}`} className={classes.link}>
                <div className={classes.imageWrapper}>
                  <Image
                    src={'/images/blogs/blog01mini.jpg'}
                    alt={blog.title}
                    fill
                    className={classes.image}
                  />
                </div>
                <div className={classes.blogInfo}>
                  <h6>{blog.title}</h6>
                  <p>{blog.description}</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionComponent>
  );
}
