'use client';

import PageLayout from '@/components/PageLayout/PageLayout';
import { useParams } from 'next/navigation';

// export function generateMetadata(key: string) {
//   return blogsData.find((i) => i.key === key) || blogsData[0];
// }

type Props = {
  params: { id: string; locale: string };
};

export default function BlogPostPage() {
  const params = useParams();

  console.log('const params = ', params);

  // const {} = generateMetadata(params.id);
  // const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  // const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return <PageLayout title={'Blog'}>blog</PageLayout>;
}

// <SectionComponent header={post.title} fields={{ date: post.date }}>
//   <div className={classes.logo}>
//     <Image
//       src={'/images/blogs/blog01logo.jpg'}
//       alt={post.title}
//       fill
//       className={classes.image}
//     />
//   </div>
// </SectionComponent>

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
