'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './ToursList.module.scss';

interface Tour {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  fullWidth?: boolean;
}

interface ToursListProps {
  initialTours?: Tour[];
}

const defaultTours: Tour[] = [
  {
    id: 'geneva',
    title: 'Geneva',
    subtitle: 'The discreet luxury',
    description:
      'Old Town walking tour with stops for Swiss cheese and Swiss chocolates tasting!',
    image: '/images/tours/01.jpg',
  },
  {
    id: 'montreux',
    title: 'Montreux walking tour and',
    subtitle: 'train ride to Roches-de-Naye',
    description:
      "After visiting the best in Montreux we'll continue our day by heading up on 2000 metres to get stunning views over the Lake and the Alps",
    image: '/images/tours/01.jpg',
  },
  {
    id: 'lavaux',
    title: 'Lavaux',
    subtitle: 'Vineyard Terraces',
    description:
      'The most Instagrammable location on the shores of Lac Léman! Its really picturesque walk and local wine tasting',
    image: '/images/tours/01.jpg',
    fullWidth: true,
  },
  {
    id: 'watches',
    title: "It's all about",
    subtitle: 'Swiss Watches!',
    description: 'Geneva visit to watch history (and present!)',
    image: '/images/tours/01.jpg',
  },
  {
    id: 'lausanne',
    title: 'Lausanne',
    subtitle: 'The historical, creative and contrasting city',
    description:
      'The medieval Old Town, Belle Époque atmosphere, the romantic modern embankment - all in one day',
    image: '/images/tours/01.jpg',
  },
];

export default function ToursList({ initialTours = defaultTours }: ToursListProps) {
  const [tours, setTours] = useState<Tour[]>(initialTours);

  useEffect(() => {
    setTours(initialTours);
  }, [initialTours]);

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <h2>Our tours in Switzerland</h2>
          <Link href='/tours' className={classes.allToursLink}>
            ALL TOURS
          </Link>
        </div>

        <div className={classes.grid}>
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className={`${classes.tourCard} ${tour.fullWidth ? classes.fullWidth : ''}`}
            >
              <div className={classes.imageWrapper}>
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className={classes.image}
                />
              </div>
              <div className={classes.tourInfo}>
                <h3>{tour.title}</h3>
                <h4>{tour.subtitle}</h4>
                <p>{tour.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={classes.customTour}>
          <h3>Haven&apos;t found your dream tour?</h3>
          <p>
            Just contact us and together we will create a customized program for you
          </p>
          <Link href='/contact' className={classes.contactButton}>
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
