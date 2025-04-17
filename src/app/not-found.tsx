import Link from 'next/link';
import styles from './not-found.module.scss';

export const metadata = {
  title: '404 - Страница не найдена | Swiss Guide',
  description: 'Страница не найдена. Вернитесь на главную страницу Swiss Guide.',
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Страница не найдена</h2>
        <p className={styles.description}>
          К сожалению, запрашиваемая вами страница не существует или была перемещена. Пожалуйста, вернитесь на главную
          страницу.
        </p>
        <Link href='/' className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
