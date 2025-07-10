'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './ToursList.module.scss';
import ContactsIcons from '@/components/ContactsIcons/ContactsIcons';
import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { ContactsSection } from '@/components/ContactsSection/ContactsSection';
import { toursData } from '@/assets/app-data/05tours';

interface Tour {
  id: string;
  titlePreview: string;
  // subtitle: string;
  description: string;
  // image: string;
  fullWidth?: boolean;
}

interface ToursListProps {
  initialTours?: Tour[];
}

const defaultTours = [
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

export default function ToursList({ initialTours = toursData }: ToursListProps) {
  const [tours, setTours] = useState<Tour[]>(initialTours);

  useEffect(() => {
    setTours(initialTours);
  }, [initialTours]);

  return (
    <SectionComponent
      header={'Our tours in Switzerland'}
      button={{ link: '/tours', label: 'ALL TOURS' }}
    >
      <div className={classes.grid}>
        {tours.map((tour) => (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            className={`${classes.tourCard} ${tour.fullWidth ? classes.fullWidth : ''}`}
          >
            <div className={classes.imageWrapper}>
              <Image
                src={'/images/tours/01.jpg'}
                alt={tour.titlePreview}
                fill
                className={classes.image}
              />
            </div>
            <div className={classes.tourInfo}>
              <h3>{tour.titlePreview}</h3>
              <p>{tour.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <ContactsSection />
    </SectionComponent>
  );
}
