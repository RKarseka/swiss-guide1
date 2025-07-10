import SectionComponent from '@/components/SectionComponent/SectionComponent';
import { Blog } from '@/assets/app-data/07blogs';
import Image from 'next/image';
import classes from './BlogPage.module.scss';

type Props = {
  blog: Blog;
};

export default function BlogPage({ blog }: Props) {
  const { title } = blog;
  return (
    <SectionComponent header={title}>
      <div className={classes.logo}>
        <Image
          src={'/images/blogs/blog01logo.jpg'}
          alt={blog.title}
          fill
          className={classes.image}
        />
      </div>
    </SectionComponent>
  );
}

// <SectionComponent header={post.title} fields={{ date: post.date }}>

// </SectionComponent>
