'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ToursList.module.scss';

const tours = [
  {
    id: 'geneva',
    title: 'Geneva',
    subtitle: 'The discreet luxury',
    description: 'Old Town walking tour with stops for Swiss cheese and Swiss chocolates tasting!',
    image: '/images/tours/geneva.jpg',
  },
  {
    id: 'montreux',
    title: 'Montreux walking tour and',
    subtitle: 'train ride to Roches-de-Naye',
    description:
      "After visiting the best in Montreux we'll continue our day by heading up on 2000 metres to get stunning views over the Lake and the Alps",
    image: '/images/tours/montreux.jpg',
  },
  {
    id: 'lavaux',
    title: 'Lavaux',
    subtitle: 'Vineyard Terraces',
    description:
      'The most Instagrammable location on the shores of Lac Léman! Its really picturesque walk and local wine tasting',
    image: '/images/tours/lavaux.jpg',
    fullWidth: true,
  },
  {
    id: 'watches',
    title: "It's all about",
    subtitle: 'Swiss Watches!',
    description: 'Geneva visit to watch history (and present!)',
    image: '/images/tours/watches.jpg',
  },
  {
    id: 'lausanne',
    title: 'Lausanne',
    subtitle: 'The historical, creative and contrasting city',
    description: 'The medieval Old Town, Belle Époque atmosphere, the romantic modern embankment - all in one day',
    image: '/images/tours/lausanne.jpg',
  },
];

export default function ToursList() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Our tours in Switzerland</h2>
          <Link href='/tours' className={styles.allToursLink}>
            ALL TOURS
          </Link>
        </div>

        <div className={styles.grid}>
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className={`${styles.tourCard} ${tour.fullWidth ? styles.fullWidth : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image src={tour.image} alt={tour.title} fill className={styles.image} />
              </div>
              <div className={styles.tourInfo}>
                <h3>{tour.title}</h3>
                <h4>{tour.subtitle}</h4>
                <p>{tour.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.customTour}>
          <h3>Haven't found your dream tour?</h3>
          <p>Just contact us and together we will create a customized program for you</p>
          <Link href='/contact' className={styles.contactButton}>
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
