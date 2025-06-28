import classes from './page.module.scss';
import ReviewCard from '@/components/ReviewCard/ReviewCard';

const reviews = [
  {
    id: 1,
    name: 'Daniel',
    location: 'Geneva',
    text: 'Anna Was wonderful. She was very knowledgeable, kind, and fun. She took the time to listen to what we wanted to see and do on our tour and worked to make it happen. We loved the views show she took us to and learning all about the history of the city.',
    image: '/images/reviews/review1.jpg',
  },
  {
    id: 2,
    name: 'Natalia',
    location: 'Geneva',
    text: 'Anna, thank you very much for the nice and informative tour around Geneva yesterday! We had a great time! Thank you!',
    image: '/images/reviews/review2.jpg',
  },
  {
    id: 3,
    name: 'Rachel',
    location: 'London',
    text: "Anna was fantastic, and so was the tour. She is extremely knowledgeable and a delight to spend time with. She took care of everything for us. I will hire her the next time I am in Switzerland. Don't miss Lisbon! It is one of the most beautiful places I have ever visited. This experience is one of the best travel experiences I have had. Thank you, Anna!",
    image: '/images/reviews/review3.jpg',
  },
  {
    id: 4,
    name: 'Alexis',
    location: 'Montreal',
    text: "Thank you for your prompt responses, for the flexibility and incredible approach to the request. I didn't attend the excursion by myself, my task was to find a guide for my colleagues who had a business trip to Geneva. They were extremely satisfied with the tour and guide, we were obviously satisfied. Thanks again!",
    image: '/images/reviews/review4.jpg',
  },
];

export default function ReviewsPage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Reviews</h1>
      <div className={classes.reviews}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            location={review.location}
            text={review.text}
            image={review.image}
          />
        ))}
      </div>
    </div>
  );
}
