import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import TourActions from '@/components/TourActions/TourActions';
import tours from '@/assets/app-data/05tours';
import PageLayout from '@/components/PageLayout/PageLayout';

interface Props {
  params: { id: string; locale: string };
}

export default async function TourPage({ params }: Props) {
  const tour = tours[+params.id];
  const { title, description, mainText, duration, cost, attractions, addons } = tour;

  return (
    <>
      <PageLayout title={title}>
        <section className={styles.section}>
          <div className={styles.leftSide}>
            <h4>{description}</h4>
            <p>{mainText}</p>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.cost}>
              <p>{duration?.toUpperCase()}</p>
              <p>{cost?.toUpperCase()}</p>
            </div>
            <div>{attractions}</div>
            <div>{addons}</div>
          </div>
        </section>
      </PageLayout>
      <div className={styles.container}>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
        <div className=''></div>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <Image src={`/images/tours/${tour.id}.jpg`} alt={tour.title} fill className={styles.image} priority />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>{title}</h1>
            {description && <h2 className={styles.subtitle}>{description}</h2>}
            <p className={styles.description}>{tour.description}</p>
            <div className={styles.details}>
              <div className={styles.duration}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
                    fill='currentColor'
                  />
                  <path d='M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z' fill='currentColor' />
                </svg>
                2,5-3 HOURS
              </div>
              <div className={styles.price}>FROM 220 CHF</div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>О туре</h2>
            <div className={styles.mainText}>
              {tour.mainText.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Что вы увидите:</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                Fountain Jet D'eau - the symbol of Geneva
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                Flower Clock in the English Garden - a colorful demonstration of Geneva as the cradle of watchmaking
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                Saint-Pierre Cathedral - the main religious attraction of the city
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                Promenade de la Treille with stunning views on the local mountain Salève and the Park Bastion
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                The Reformation Wall - of the same author with the famous statue Christ the Redeemer in Rio
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                The streets, that used to be "red lights district" in the Geneva's history
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                Cheese tasting in one of the local artisanal shops
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                The best chocolate shops in the city
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Дополнительные расходы:</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>
                10 CHF – cheese tasting
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}>•</span>7 CHF – the entrance to the top of the tower of Saint-Pierre
                Cathedral (optional)
              </li>
            </ul>
          </div>

          <div className={styles.pricing}>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>1-4 PERSONS</span>
              <span className={styles.priceValue}>220 CHF</span>
            </div>
            <div className={styles.priceItem}>
              <span className={styles.priceLabel}>FOR EACH ADDITIONAL PERSON</span>
              <span className={styles.priceValue}>40 CHF</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href='/tours' className={styles.backButton}>
              Назад к турам
            </Link>
            <button className={styles.bookButton}>BOOK NOW</button>
          </div>
        </div>

        <TourActions />
      </div>
    </>
  );
}
