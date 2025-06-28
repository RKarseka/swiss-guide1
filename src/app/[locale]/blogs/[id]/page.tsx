import { Metadata } from 'next';
import Image from 'next/image';
import classes from './page.module.scss';
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: string[];
}

const blogPosts: Record<string, Record<string, BlogPost>> = {
  ru: {
    'madrid-guide': {
      id: 'madrid-guide',
      title: 'Путеводитель по Мадриду',
      date: '01.01.2025',
      image: '/images/blogs/madrid.jpg',
      content: [
        'Мадрид - это город, который никогда не спит, где история и современность переплетаются в каждом уголке. Начните свое знакомство с городом с площади Пуэрта-дель-Соль, исторического центра Мадрида.',
        'Любители гастрономии обязательно должны посетить рынок Сан-Мигель, где можно попробовать лучшие тапас и местные деликатесы. А вечером отправляйтесь в один из многочисленных ресторанов, чтобы насладиться настоящей паэльей или хамоном.',
        'Парк Ретиро - это зеленый оазис в центре города, идеальное место для отдыха и прогулок. Здесь можно покататься на лодке по озеру, посетить Хрустальный дворец или просто насладиться природой.',
        'Не забудьте также посетить стадион Сантьяго Бернабеу, домашнюю арену футбольного клуба Реал Мадрид, и пройтись по элегантному району Саламанка с его бутиками и кафе.',
      ],
    },
  },
  en: {
    'madrid-guide': {
      id: 'madrid-guide',
      title: 'Madrid Travel Guide',
      date: '01/01/2025',
      image: '/images/blogs/madrid.jpg',
      content: [
        'Madrid is a city that never sleeps, where history and modernity intertwine at every corner. Start your exploration at Puerta del Sol, the historical center of Madrid.',
        'Food lovers must visit the San Miguel Market to try the best tapas and local delicacies. In the evening, head to one of the many restaurants to enjoy authentic paella or jamón.',
        'Retiro Park is a green oasis in the city center, perfect for relaxation and walks. Here you can rent a boat on the lake, visit the Crystal Palace, or simply enjoy nature.',
        "Don't forget to visit the Santiago Bernabéu Stadium, home of Real Madrid FC, and stroll through the elegant Salamanca district with its boutiques and cafes.",
      ],
    },
  },
};

export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const post = blogPosts[params.locale]?.[params.id];

  if (!post) {
    return {
      title: '404 - Page Not Found | Swiss Guide',
      description: 'The requested article was not found',
    };
  }

  return {
    title: `${post.title} | Swiss Guide`,
    description: post.content[0],
    openGraph: {
      title: post.title,
      description: post.content[0],
      images: [post.image],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const post = blogPosts[params.locale]?.[params.id];

  if (!post) {
    return null;
  }

  const currentIndex = Object.keys(blogPosts[params.locale]).indexOf(post.id);
  const posts = Object.values(blogPosts[params.locale]);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <article className={classes.container}>
      <h1 className={classes.title}>{post.title}</h1>
      <p className={classes.date}>{post.date}</p>
      <div className={classes.imageContainer}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={classes.image}
          priority
        />
      </div>
      <div className={classes.content}>
        {post.content.map((paragraph, index) => (
          <p key={index} className={classes.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <BlogNavigation
        prevArticle={
          prevPost ? { id: prevPost.id, title: prevPost.title } : undefined
        }
        nextArticle={
          nextPost ? { id: nextPost.id, title: nextPost.title } : undefined
        }
      />
    </article>
  );
}
