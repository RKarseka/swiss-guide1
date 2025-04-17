'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './Reviews.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const reviews = [
  {
    id: 1,
    name: 'Daniel',
    location: 'Geneva',
    date: "February'25",
    image: '/images/reviews/review1.jpg',
    text: 'Anna was wonderful. She was very knowledgeable, kind and fun. She took the time to listen to what we wanted to see and do on our tour and worked to make it happen. We loved the cheese shop she took us to, and learning all about the history of the city.',
  },
  {
    id: 2,
    name: 'Natalia',
    location: 'Geneva',
    date: "March'25",
    image: '/images/reviews/review2.jpg',
    text: 'Anna, thank you so much for the nice and informative tour around Geneva yesterday!!! We had a great time! Thank you!',
  },
  {
    id: 3,
    name: 'Rachel',
    location: 'Lavaux',
    date: "Month'Year",
    image: '/images/reviews/review3.jpg',
    text: "Anna was fantastic, so was the tour. She is extremely knowledgeable and it's a delight to spend time with her. She took care of everything for us - I will hire her the next time I'm in Switzerland. Don't miss Lavaux! It is one of the most beautiful places I've ever visited ...",
  },
];

export default function Reviews() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Reviews</h2>
          <Link href='/reviews' className={styles.allReviewsLink}>
            ALL REVIEWS
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
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
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className={styles.reviewCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={240}
                    height={160}
                    className={styles.image}
                  />
                </div>
                <div className={styles.reviewContent}>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.reviewInfo}>
                    <p className={styles.name}>{review.name}</p>
                    <p className={styles.location}>{review.location}</p>
                    <p className={styles.date}>{review.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='swiper-button-prev' />
          <div className='swiper-button-next' />
        </Swiper>
      </div>
    </section>
  );
}
