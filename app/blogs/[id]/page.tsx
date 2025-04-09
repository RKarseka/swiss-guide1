import { FC } from 'react';
import { useRouter } from 'next/router';

const BlogPostPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const blogPosts = {
    1: {
      title: 'Путешествие по Швейцарии',
      content: 'Полное содержание статьи о путешествии по Швейцарии...'
    },
    2: {
      title: 'Лучшие горные маршруты',
      content: 'Полное содержание статьи о горных маршрутах...'
    },
    3: {
      title: 'Шоколадные фабрики Швейцарии',
      content: 'Полное содержание статьи о шоколадных фабриках...'
    }
  };

  const post = blogPosts[Number(id) as keyof typeof blogPosts];

  if (!post) {
    return <div>Статья не найдена</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage; 