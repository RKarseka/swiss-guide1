export type blog = {
  key: string;
  img: string;
  title: string;
  description?: string;
  date?: string;
};

const blogs: blog[] = [
  {
    key: 'geneva',
    img: '',
    date: '15.05.2025',
    title:
      'Geneva day trips: 5 must-see places near Geneva you can visit in one day',
    description:
      'What are the main attractions not to be missed located in the proximity to Geneva? Here are our suggestions which would make the most of your visit',
  },
  {
    key: 'lavaux',
    img: '',
    date: '',
    title:
      'Geneva day trips: 5 must-see places near Geneva you can visit in one day',
    description:
      'What are the main attractions not to be missed located in the proximity to Geneva? Here are our suggestions which would make the most of your visit',
  },
  {
    key: 'lavaux1',
    img: '',
    date: '',
    title: 'Switzerland travel planning guide:  ideas, costs, weather & when to go',
    description:
      'Smart preparation essential for a seamless trip to Switzerland.. Discover the key things to plan for a truly hassle-free Swiss adventure.',
  },
];

export default blogs;
