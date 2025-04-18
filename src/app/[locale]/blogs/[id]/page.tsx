import { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.scss';
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'madrid-guide': {
    id: 'madrid-guide',
    title: 'Путеводитель по Мадриду: Что посмотреть в столице Испании',
    date: '15 марта 2024',
    image: '/images/blogs/madrid.jpg',
    content: [
      'Мадрид, столица Испании, представляет собой удивительное сочетание исторического наследия и современной жизни. Этот город никогда не спит и предлагает посетителям богатую культурную программу, изысканную кухню и незабываемую атмосферу.',
      'Начните свое путешествие с посещения музея Прадо - одного из крупнейших и значимых музеев европейского изобразительного искусства. Здесь вы найдете шедевры Веласкеса, Гойи и многих других великих мастеров. Для любителей искусства также обязательно стоит посетить музей Тиссена-Борнемисы и Центр искусств королевы Софии.',
      'Площадь Пуэрта-дель-Соль является сердцем Мадрида и отправной точкой для изучения исторического центра города. Отсюда можно легко добраться до Королевского дворца, Гран-Виа и площади Пласа-Майор.',
      'Любители гастрономии обязательно должны посетить рынок Сан-Мигель, где можно попробовать лучшие тапас и местные деликатесы. А вечером отправляйтесь в один из многочисленных ресторанов, чтобы насладиться настоящей паэльей или хамоном.',
      'Парк Ретиро - это зеленый оазис в центре города, идеальное место для отдыха и прогулок. Здесь можно покататься на лодке по озеру, посетить Хрустальный дворец или просто насладиться природой.',
      'Не забудьте также посетить стадион Сантьяго Бернабеу, домашнюю арену футбольного клуба Реал Мадрид, и пройтись по элегантному району Саламанка с его бутиками и кафе.',
    ],
  },
};

export const generateMetadata = (params: any): Metadata => {
  const post = blogPosts[params.id];

  if (!post) {
    return {
      title: '404 - Страница не найдена | Swiss Guide',
      description: 'Запрашиваемая статья не найдена',
    };
  }

  return {
    title: `${post.title} | Swiss Guide`,
    description: post.content[0],
  };
};

export default function BlogPostPage(params: any) {
  const post = blogPosts[params.id];

  if (!post) {
    return null;
  }

  const currentIndex = Object.keys(blogPosts).indexOf(post.id);
  const posts = Object.values(blogPosts);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.imageContainer}>
        <Image src={post.image} alt={post.title} fill className={styles.image} priority />
      </div>
      <div className={styles.content}>
        {post.content.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <BlogNavigation
        prevArticle={prevPost ? { id: prevPost.id, title: prevPost.title } : undefined}
        nextArticle={nextPost ? { id: nextPost.id, title: nextPost.title } : undefined}
      />
    </article>
  );
}
