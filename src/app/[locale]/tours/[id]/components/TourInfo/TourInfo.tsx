import React, { useState } from 'react';
import cx from 'clsx';
import classes from '@/app/[locale]/tours/[id]/page.module.scss';
import Image from 'next/image';
import ClockIcon from '@/assets/img/icons/clock.svg';
import ReactMarkdown from 'react-markdown';
import BookNow from '@/components/BookNow/BookNow';
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { Tour } from '@/assets/types/types';

type Props = { id: string; tour: Tour };

export function TourInfo({ tour, id }: Props) {
  const {
    title,
    description,
    mainText,
    length,
    cost,
    attractions,
    shortDescription,
    addons,
    prices,
    subtitle,
  } = tour;

  const [mainSlide, setMainSlide] = useState(0);

  return (
    <SectionComponent header={title}>
      <div className={cx('mb-30', classes.section)}>
        <h4>{subtitle}</h4>
        <div className={classes.cost}>
          <div className={classes.duration}>
            <ClockIcon width={25} height={25} />
            <h5>{length?.toUpperCase()}</h5>
          </div>
          <h5>{cost?.toUpperCase()}</h5>
        </div>
        <div className={classes.mainText}>
          <div>
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
          <div className={classes.mainSlide}>
            <Image src={`/images/tours/01.jpg`} alt={tour.title} fill />
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
