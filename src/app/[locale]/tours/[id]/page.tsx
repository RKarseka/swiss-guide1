'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import cx from 'clsx';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import styles from './page.module.scss';
import tours from '@/assets/app-data/05tours';
import PageLayout from '@/components/PageLayout/PageLayout';
import ClockIcon from '@/assets/img/icons/clock.svg';
import BookNow from '@/components/BookNow/BookNow';

export default function TourPage() {
  const params = useParams();
  const [mainSlide, setMainSlide] = useState(0);
  if (!params?.id) return null;
  const tour = tours[+params.id];
  const {
    title,
    description,
    mainText,
    duration,
    cost,
    attractions,
    shortDescription,
    addons,
    prices,
  } = tour;

  return (
    <PageLayout title={title}>
      <section className={cx('mb-30', styles.section)}>
        <h4>{description}</h4>
        <div className={styles.cost}>
          <div className={styles.duration}>
            <Image src={ClockIcon} alt='Duration' width={25} height={25} />
            <h5>{duration?.toUpperCase()}</h5>
          </div>
          <h5>{cost?.toUpperCase()}</h5>
        </div>
        <div className={styles.mainText}>
          <div>
            <ReactMarkdown>{mainText}</ReactMarkdown>
          </div>
          <div className={styles.mainSlide}>
            <Image
              src={`/images/tours/tour${params.id}/01.jpg`}
              alt={tour.title}
              fill
            />
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.rightMiddle}>
            {attractions && (
              <div className={styles.attractions}>
                <p>What you&#39;ll see:</p>
                <ul>
                  {attractions.map((item, i) => (
                    <li key={i}>
                      <ReactMarkdown>{item}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {shortDescription && <ReactMarkdown>{shortDescription}</ReactMarkdown>}
            {addons && (
              <div>
                <strong>Additional expenses:</strong>
                <ReactMarkdown>{addons}</ReactMarkdown>
              </div>
            )}
          </div>
          <div>
            <div className={cx('mb-24', styles.prices)}>
              {prices?.map((price, i) => (
                <div key={i}>
                  <div className='grid-columns'>
                    <h5>{price.title?.toUpperCase()}</h5>
                    <h5>{price.cost?.toUpperCase()}</h5>
                  </div>
                  {'notification' in price && (
                    <span className={styles.notification}>{price.notification}</span>
                  )}
                </div>
              ))}
            </div>
            <div className={cx('grid-columns', styles['buttons-container'])}>
              <BookNow />
              <a href='t.me' className={'button-link'}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section className={styles.allTours}>
        <Link href={`/tours`} className={'button-link'}>
          show All tours
        </Link>
      </section>
    </PageLayout>
  );
}
