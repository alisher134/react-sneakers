import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__brand}>© {year} «React Sneakers»</p>
      <p className={styles.footer__copyright}>Все права защищены</p>
    </footer>
  );
};
