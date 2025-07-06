import { Metadata } from 'next';
import Image from 'next/image';
import classes from './page.module.scss';
import BlogNavigation from '@/components/BlogNavigation/BlogNavigation';
import blogsData from '@/assets/app-data/07blogs';
import SectionComponent from '@/components/SectionComponent/SectionComponent';

export function generateMetadata(key: string) {
  return blogsData.find((i) => i.key === key) || blogsData[0];
}

type Props = {
  params: { id: string; locale: string };
};
export default function BlogPostPage({ params }: Props) {
  const post = generateMetadata(params.id);
  console.log('const post = ', post);
  // const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  // const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <SectionComponent
      header={post.title}
      fields={{ date: post.date }}
    ></SectionComponent>

    // <article className={classes.container}>
    //   <h1 className={classes.title}>{post.title}</h1>
    //   <p className={classes.date}>{post.date}</p>
    //   <div className={classes.imageContainer}>
    //     <Image
    //       src={post.image}
    //       alt={post.title}
    //       fill
    //       className={classes.image}
    //       priority
    //     />
    //   </div>
    //   <div className={classes.content}>
    //     {post.content.map((paragraph, index) => (
    //       <p key={index} className={classes.paragraph}>
    //         {paragraph}
    //       </p>
    //     ))}
    //   </div>
    //   <BlogNavigation
    //     prevArticle={
    //       prevPost ? { id: prevPost.id, title: prevPost.title } : undefined
    //     }
    //     nextArticle={
    //       nextPost ? { id: nextPost.id, title: nextPost.title } : undefined
    //     }
    //   />
    // </article>
  );
}
