import styles from './not-found.module.scss';
import BackButton from './components/BackButton';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Страница не найдена</h2>
      <p className={styles.description}>
        Извините, запрашиваемая страница не существует.
      </p>
      <BackButton />
    </div>
  );
} 