'use client';

import { FC } from 'react';
import BlogCard from '../components/BlogCard';
import AuthorInfo from '../components/AuthorInfo';
import styles from './page.module.scss';
import commonStyles from '../styles/common.module.scss';

const blogs = [
  {
    id: 1,
    title: 'Путешествие по Швейцарии',
    excerpt: 'Откройте для себя удивительные места Швейцарии, от живописных Альп до очаровательных городов...',
    imageUrl: '/images/blog1.jpg',
    date: '15 марта 2024'
  },
  {
    id: 2,
    title: 'Лучшие горные маршруты',
    excerpt: 'Исследуйте захватывающие горные тропы, которые предлагают потрясающие виды и незабываемые впечатления...',
    imageUrl: '/images/blog2.jpg',
    date: '10 марта 2024'
  },
  {
    id: 3,
    title: 'Шоколадные фабрики Швейцарии',
    excerpt: 'Посетите лучшие шоколадные фабрики и узнайте секреты производства знаменитого швейцарского шоколада...',
    imageUrl: '/images/blog3.jpg',
    date: '5 марта 2024'
  },
  {
    id: 4,
    title: 'Зимние курорты Швейцарии',
    excerpt: 'Откройте для себя лучшие горнолыжные курорты Швейцарии, где вас ждут идеальные склоны и роскошные отели...',
    imageUrl: '/images/blog4.jpg',
    date: '28 февраля 2024'
  },
  {
    id: 5,
    title: 'Швейцарские озера',
    excerpt: 'Познакомьтесь с самыми красивыми озерами Швейцарии, от Женевского до Люцернского, и их уникальной историей...',
    imageUrl: '/images/blog5.jpg',
    date: '20 февраля 2024'
  },
  {
    id: 6,
    title: 'Культурные достопримечательности',
    excerpt: 'Исследуйте богатое культурное наследие Швейцарии: музеи, замки и исторические памятники...',
    imageUrl: '/images/blog6.jpg',
    date: '15 февраля 2024'
  },
  {
    id: 7,
    title: 'Швейцарская кухня',
    excerpt: 'Погрузитесь в мир швейцарской кухни: от фондю и раклета до знаменитых десертов...',
    imageUrl: '/images/blog7.jpg',
    date: '10 февраля 2024'
  },
  {
    id: 8,
    title: 'Винные регионы Швейцарии',
    excerpt: 'Откройте для себя малоизвестные, но удивительные винодельческие регионы Швейцарии...',
    imageUrl: '/images/blog8.jpg',
    date: '5 февраля 2024'
  },
  {
    id: 9,
    title: 'Пешие маршруты по Швейцарии',
    excerpt: 'Лучшие пешие маршруты для любителей активного отдыха: от легких прогулок до сложных треков...',
    imageUrl: '/images/blog9.jpg',
    date: '1 февраля 2024'
  }
];

const BlogsPage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={commonStyles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>Блоги</h1>
            <div className={styles.grid}>
              {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <div className={styles.sidebar}>
            <AuthorInfo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogsPage; 