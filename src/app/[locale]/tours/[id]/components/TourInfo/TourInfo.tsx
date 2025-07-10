import cx from 'clsx';
import classes from '@/app/[locale]/tours/[id]/page.module.scss';
import Image from 'next/image';
import ClockIcon from '@/assets/img/icons/clock.svg';
import ReactMarkdown from 'react-markdown';
import BookNow from '@/components/BookNow/BookNow';
import React, { useState } from 'react';
import { TourData } from '@/assets/app-data/05tours';
import SectionComponent from '@/components/SectionComponent/SectionComponent';

type Props = { id: string; tour: TourData };

export function TourInfo({ tour, id }: Props) {
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

  const [mainSlide, setMainSlide] = useState(0);

  return (
    <SectionComponent header={'Header'}>
      <div className={cx('mb-30', classes.section)}>
        <h4>{description}</h4>
        <div className={classes.cost}>
          <div className={classes.duration}>
            <Image src={ClockIcon} alt='Duration' width={25} height={25} />
            <h5>{duration?.toUpperCase()}</h5>
          </div>
          <h5>{cost?.toUpperCase()}</h5>
        </div>
        <div className={classes.mainText}>
          <div>
            <ReactMarkdown>{mainText}</ReactMarkdown>
          </div>
          <div className={classes.mainSlide}>
            <Image src={`/images/tours/tour${id}/01.jpg`} alt={tour.title} fill />
          </div>
        </div>

        <div className={classes.rightSide}>
          <div className={classes.rightMiddle}>
            {attractions && (
              <div className={classes.attractions}>
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
            <div className={cx('mb-24', classes.prices)}>
              {prices?.map((price, i) => (
                <div key={i}>
                  <div className='grid-columns'>
                    <h5>{price.title?.toUpperCase()}</h5>
                    <h5>{price.cost?.toUpperCase()}</h5>
                  </div>
                  {'notification' in price && (
                    <span className={classes.notification}>
                      {price.notification}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className={cx('grid-columns', classes['buttons-container'])}>
              <BookNow />
              <a href='t.me' className={'button-link'}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
