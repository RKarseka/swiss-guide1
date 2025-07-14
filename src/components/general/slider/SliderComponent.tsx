import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import classes from './SliderComponent.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowLeft from '@/assets/img/icons/arrow_left.svg';
import ArrowRight from '@/assets/img/icons/arrow_right.svg';

import cx from 'clsx';

type SlideComponentType<T> = React.ComponentType<{ slide: T }>;

type Props<T> = {
  slideComponent: SlideComponentType<T>;
  slides: T[];
};

export default function SliderComponent<T extends { key: React.Key }>({
  slides,
  slideComponent: SlideComponent,
}: Props<T>) {
  const navigation = {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  };
  const breakpoints = { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } };
  return (
    <div className={classes.swiperWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={navigation}
        loop={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={breakpoints}
        slideToClickedSlide={true}
        className={classes.swiper}
      >
        {slides.map((slide: T) => (
          <SwiperSlide key={slide.key}>
            <SlideComponent slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.controls}>
        <div className={cx('swiper-button-prev', classes.swiperButtonPrev)}>
          <button>
            <ArrowLeft />
          </button>
        </div>
        <div className={cx('swiper-pagination', classes.swiperPagination)} />
        <div className={cx('swiper-button-next', classes.swiperButtonNext)}>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
