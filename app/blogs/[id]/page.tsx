'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';

const blogPosts = {
  1: {
    title: 'Путешествие по Швейцарии',
    content: 'Полное содержание статьи о путешествии по Швейцарии. Откройте для себя удивительные места Швейцарии, от живописных Альп до очаровательных городов. Узнайте о лучших маршрутах, достопримечательностях и местных традициях.',
    imageUrl: '/images/blog1.jpg',
    date: '15 марта 2024',
    author: 'Анна Петрова'
  },
  2: {
    title: 'Лучшие горные маршруты',
    content: 'Полное содержание статьи о горных маршрутах. Исследуйте захватывающие горные тропы, которые предлагают потрясающие виды и незабываемые впечатления. Советы по подготовке к походу и выбору оптимального маршрута.',
    imageUrl: '/images/blog2.jpg',
    date: '10 марта 2024',
    author: 'Иван Сидоров'
  },
  3: {
    title: 'Шоколадные фабрики Швейцарии',
    content: 'Полное содержание статьи о шоколадных фабриках. Посетите лучшие шоколадные фабрики и узнайте секреты производства знаменитого швейцарского шоколада. История шоколадного дела в Швейцарии и современные технологии производства.',
    imageUrl: '/images/blog3.jpg',
    date: '5 марта 2024',
    author: 'Мария Иванова'
  }
};

const BlogPostPage: FC = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className={styles.error}>
        <h1>Статья не найдена</h1>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className={styles.image}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.author}>{post.author}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <article className={styles.article}>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </main>
  );
};

export default BlogPostPage; 