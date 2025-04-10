'use client';

import { FC } from 'react';
import BlogCard from '../components/BlogCard';
import styles from './page.module.scss';

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
  }
];

const BlogsPage: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Блоги</h1>
        <div className={styles.grid}>
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogsPage; 