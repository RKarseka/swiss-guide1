import Image from 'next/image';
import classes from './BlogsCard.module.scss';
import Link from 'next/link';
import { Blog } from '@/assets/app-data/07blogs';

type Props = { blog: Blog };

export default function BlogsCard({ blog }: Props) {
  const { key, title, description, date } = blog;
  return (
    <div>
      <div className={classes.photo}>
        <Image src={`/images/blogs/01.jpg`} alt={'blog'} fill />
      </div>
      <div>
        <p className={classes.header}>{title}</p>
        <p className={classes.main}>{description}</p>
        <div className={classes.footer}>
          <p>{date}</p>
          <Link href={`/blogs/${key}`} className={classes.card}>
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
}
