'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import classes from './ReviewsPreview.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { useNotionData } from '@/notion/NotionDataProvider';
import { Review } from '@/assets/types/types';

import ArrowLeft from '@/assets/img/icons/arrow_left.svg';
import ArrowRight from '@/assets/img/icons/arrow_right.svg';

import cx from 'clsx';

export default function ReviewsPreview() {
  const { reviewData } = useNotionData();
  console.log('const classes.swiperButtonPrev = ', classes.swiperButtonPrev);
  return (
    <SectionComponent
      header={'Reviews'}
      button={{ link: '/reviews', label: 'ALL REVIEWS' }}
    >
      <div className={classes.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: classes.swiperButtonPrev,
            nextEl: classes.swiperButtonNext,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
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
          className={classes.swiper}
        >
          {reviewData.map((review: Review) => (
            <SwiperSlide key={review.key}>
              <div className={classes.reviewCard}>
                <div className={classes.info}>
                  <Image
                    src={'/images/reviews/mini01.jpg'}
                    alt={`${review.client}'s review`}
                    width={120}
                    height={160}
                    className={classes.image}
                  />
                  <div>
                    <p className='name'>{review.client}</p>
                    <p className='place'>{review.place}</p>
                    <p className='date'>{review.date}</p>
                  </div>
                </div>
                <p className={classes.reviewText}>{review.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={classes.controls}>
          <div className={classes.swiperButtonPrev}>
            <ArrowLeft />
          </div>
          <div className={cx('swiper-pagination', classes.swiperPagination)} />
          <div className={classes.swiperButtonNext}>
            <ArrowRight />
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
