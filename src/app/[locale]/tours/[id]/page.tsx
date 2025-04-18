import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import TourActions from '@/components/TourActions/TourActions';

interface Tour {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
  details: {
    itinerary: string[];
    included: string[];
    notIncluded: string[];
    requirements: string[];
  };
}

const tours: Record<string, Tour> = {
  '1': {
    id: '1',
    title: 'Экскурсия по Цюриху',
    description: 'Познакомьтесь с историческим центром Цюриха, его знаменитыми церквями и живописными улочками.',
    price: 150,
    duration: '3 часа',
    image: '/images/tours/zurich.jpg',
    difficulty: 'Легкий',
    details: {
      itinerary: [
        'Встреча с гидом на центральной площади',
        'Посещение Старого города',
        'Осмотр церкви Фраумюнстер',
        'Прогулка по набережной реки Лиммат',
        'Посещение Банхофштрассе',
      ],
      included: ['Услуги профессионального гида', 'Входные билеты в музеи', 'Обзорная экскурсия'],
      notIncluded: ['Транспорт до места встречи', 'Личные расходы', 'Питание'],
      requirements: ['Удобная обувь', 'Фотоаппарат', 'Зонт (по погоде)'],
    },
  },
  '2': {
    id: '2',
    title: 'Поход в Альпы',
    description: 'Захватывающий поход по живописным альпийским тропам с профессиональным гидом.',
    price: 250,
    duration: '6 часов',
    image: '/images/tours/alps.jpg',
    difficulty: 'Средний',
    details: {
      itinerary: [
        'Встреча с гидом в базовом лагере',
        'Подъем по горной тропе',
        'Обед с видом на Альпы',
        'Спуск по альтернативному маршруту',
        'Возвращение в базовый лагерь',
      ],
      included: ['Услуги профессионального гида', 'Обед в горах', 'Аренда необходимого снаряжения'],
      notIncluded: ['Транспорт до базового лагеря', 'Личные расходы', 'Страховка'],
      requirements: ['Горная обувь', 'Теплая одежда', 'Рюкзак', 'Бутылка воды'],
    },
  },
  '3': {
    id: '3',
    title: 'Винный тур',
    description: 'Посетите лучшие винодельни Швейцарии и продегустируйте местные вина.',
    price: 200,
    duration: '4 часа',
    image: '/images/tours/wine.jpg',
    difficulty: 'Легкий',
    details: {
      itinerary: [
        'Встреча с гидом в первой винодельне',
        'Экскурсия по виноградникам',
        'Дегустация вин',
        'Посещение второй винодельни',
        'Обед с вином',
      ],
      included: ['Услуги профессионального гида', 'Дегустация вин', 'Обед', 'Трансфер между винодельнями'],
      notIncluded: ['Транспорт до места встречи', 'Покупка вин', 'Личные расходы'],
      requirements: ['Паспорт (для подтверждения возраста)', 'Удобная обувь', 'Фотоаппарат'],
    },
  },
  '4': {
    id: '4',
    title: 'Горный велосипед',
    description: 'Экстремальный спуск на горном велосипеде по живописным горным тропам.',
    price: 180,
    duration: '5 часов',
    image: '/images/tours/bike.jpg',
    difficulty: 'Сложный',
    details: {
      itinerary: [
        'Встреча с инструктором',
        'Инструктаж по технике безопасности',
        'Подъем на гору на фуникулере',
        'Спуск по горной тропе',
        'Обед в горном ресторане',
      ],
      included: ['Услуги профессионального инструктора', 'Аренда горного велосипеда', 'Защитное снаряжение', 'Обед'],
      notIncluded: ['Транспорт до места встречи', 'Личные расходы', 'Страховка'],
      requirements: ['Спортивная одежда', 'Кроссовки', 'Солнцезащитные очки', 'Бутылка воды'],
    },
  },
};

export default async function TourPage(params: any) {
  const tour = tours[params.id];

  if (!tour) {
    return <div>Тур не найден</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <Image src={tour.image} alt={tour.title} fill className={styles.image} />
          <div className={styles.difficulty}>{tour.difficulty}</div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{tour.title}</h1>
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
              {tour.duration}
            </div>
            <div className={styles.price}>{tour.price} CHF</div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Маршрут</h2>
          <ul className={styles.list}>
            {tour.details.itinerary.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.number}>{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.grid}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Включено</h2>
            <ul className={styles.list}>
              {tour.details.included.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z' fill='currentColor' />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Не включено</h2>
            <ul className={styles.list}>
              {tour.details.notIncluded.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
                      fill='currentColor'
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Что взять с собой</h2>
          <ul className={styles.list}>
            {tour.details.requirements.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M17 6H7C5.9 6 5 6.9 5 8V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V8C19 6.9 18.1 6 17 6ZM17 20H7V8H17V20Z'
                    fill='currentColor'
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href='/tours' className={styles.backButton}>
          Назад к турам
        </Link>
        <button className={styles.bookButton}>Забронировать тур</button>
      </div>

      <TourActions />
    </div>
  );
}
