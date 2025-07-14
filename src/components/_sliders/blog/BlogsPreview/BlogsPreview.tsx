'use client';

import Image from 'next/image';
import Link from 'next/link';
import classes from './BlogsPreview.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import SliderComponent from '@/components/__general/slider/SliderComponent';
import { useNotionData } from '@/notion/NotionDataProvider';

interface Blog {
  key: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

function BlogsSlide({ slide }: { slide: Blog }) {
  return (
    <div className={classes.card}>
      <Link href={`/blogs/${slide.key}`} className={classes.link}>
        <div className={classes.imageWrapper}>
          <Image
            src={'/images/blogs/blog01mini.jpg'}
            alt={slide.title}
            fill
            className={classes.image}
          />
        </div>
        <div className={classes.blogInfo}>
          <h6>{slide.title}</h6>
          <p>{slide.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function BlogsPreview() {
  const { blogData } = useNotionData();

  return (
    <SectionComponent
      header={'Blog'}
      button={{ link: '/blogs', label: 'ALL ARTICLES' }}
    >
      <SliderComponent slideComponent={BlogsSlide} slides={blogData} />
    </SectionComponent>
  );
}
