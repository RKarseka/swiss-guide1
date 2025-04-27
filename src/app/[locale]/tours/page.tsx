import TourCard from '@/components/TourCard/TourCard';
import styles from './page.module.scss';
import PageLayout from '@/components/PageLayout/PageLayout';

export default function ToursPage() {
  return (
    <PageLayout translation={'ToursPage'}></PageLayout>
    // <div className='container'>
    //   <div>
    //     <h2>Наши туры</h2>
    //     <p>Выберите идеальный тур для вашего путешествия по Швейцарии</p>
    //   </div>
    //   {/*<div className={styles.grid}>*/}
    //   {/*  {tours.map((tour) => (*/}
    //   {/*    <TourCard key={tour.id} {...tour} />*/}
    //   {/*  ))}*/}
    //   {/*</div>*/}
    // </div>
  );
}
