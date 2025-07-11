'use client';

import PageLayout from '@/components/PageLayout/PageLayout';
import { useParams } from 'next/navigation';
import blogsData, { Blog } from '@/assets/app-data/07blogs';
import BlogPage from '@/components/_pages/Blog/BlogPage/BlogPage';
import { OtherTours } from '@/app/[locale]/tours/[id]/components/OtherTours/OtherTours';

// export function generateMetadata(key: string) {
//   return blogsData.find((i) => i.key === key) || blogsData[0];
// }

type Props = {
  params: { id: string; locale: string };
};

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;
  if (!id) return null;

  const blog: Blog = blogsData.find((i) => i.key === id) || blogsData[0];
  // const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  // const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <PageLayout title={blog.title}>
      <BlogPage blog={blog} />
      <OtherTours />
    </PageLayout>
  );
}

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
