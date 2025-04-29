import styles from './Button.module.scss';

type Props = { 
  children: React.ReactNode;
  onClick?: () => void;
};
export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
