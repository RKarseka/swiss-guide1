import TourCard from '@/components/TourCard/TourCard';
import styles from './page.module.scss';

const tours = [
  {
    id: '1',
    title: 'Экскурсия по Цюриху',
    description: 'Познакомьтесь с историческим центром Цюриха, его знаменитыми церквями и живописными улочками.',
    price: 150,
    duration: '3 часа',
    image: '/images/tours/zurich.jpg',
    difficulty: 'Легкий' as const,
  },
  {
    id: '2',
    title: 'Поход в Альпы',
    description: 'Захватывающий поход по живописным альпийским тропам с профессиональным гидом.',
    price: 250,
    duration: '6 часов',
    image: '/images/tours/alps.jpg',
    difficulty: 'Средний' as const,
  },
  {
    id: '3',
    title: 'Винный тур',
    description: 'Посетите лучшие винодельни Швейцарии и продегустируйте местные вина.',
    price: 200,
    duration: '4 часа',
    image: '/images/tours/wine.jpg',
    difficulty: 'Легкий' as const,
  },
  {
    id: '4',
    title: 'Горный велосипед',
    description: 'Экстремальный спуск на горном велосипеде по живописным горным тропам.',
    price: 180,
    duration: '5 часов',
    image: '/images/tours/bike.jpg',
    difficulty: 'Сложный' as const,
  },
];

export default function ToursPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Наши туры</h1>
        <p className={styles.description}>Выберите идеальный тур для вашего путешествия по Швейцарии</p>
      </div>
      <div className={styles.grid}>
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} />
        ))}
      </div>
    </div>
  );
}
