import SectionComponent from '@/components/SectionComponent/SectionComponent';
import BlogsCard from '@/components/_pages/Blogs/BlogsCard/BlogsCard';
import classes from './BlogsPage.module.scss';
import blogs from '@/assets/app-data/07blogs';

export default function BlogsPage() {
  return (
    <SectionComponent header={'Blog'}>
      <div className={classes.cards}>
        {blogs.map((blog) => (
          <BlogsCard key={blog.key} blog={blog} />
        ))}
      </div>
    </SectionComponent>
  );
}
