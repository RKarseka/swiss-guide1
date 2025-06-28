import Link from 'next/link';
import classes from './not-found.module.scss';

export const metadata = {
  title: '404 - Страница не найдена | Swiss Guide',
  description: 'Страница не найдена. Вернитесь на главную страницу Swiss Guide.',
};

export default function NotFound() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>404</h1>
        <h2 className={classes.subtitle}>Страница не найдена</h2>
        <p className={classes.description}>
          К сожалению, запрашиваемая вами страница не существует или была перемещена.
          Пожалуйста, вернитесь на главную страницу.
        </p>
        <Link href='/' className={classes.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
