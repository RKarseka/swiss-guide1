import { FC } from 'react';

const ReviewsPage: FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Иван Иванов',
      text: 'Отличный тур! Очень понравилось.',
    },
    {
      id: 2,
      author: 'Мария Петрова',
      text: 'Незабываемые впечатления и отличная организация.',
    },
    {
      id: 3,
      author: 'Алексей Смирнов',
      text: 'Рекомендую всем!'
    }
  ];

  return (
    <div>
      <h1>Отзывы</h1>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage; 