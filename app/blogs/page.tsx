import { FC } from 'react';

const BlogsPage: FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'Путешествие по Швейцарии',
      excerpt: 'Откройте для себя удивительные места Швейцарии...'
    },
    {
      id: 2,
      title: 'Лучшие горные маршруты',
      excerpt: 'Исследуйте захватывающие горные тропы...'
    },
    {
      id: 3,
      title: 'Шоколадные фабрики Швейцарии',
      excerpt: 'Посетите лучшие шоколадные фабрики и узнайте секреты...'
    }
  ];

  return (
    <div>
      <h1>Блоги</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage; 