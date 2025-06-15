import { Link } from 'react-router-dom';

import logoImg from '@/assets/images/image.png';

import { ROUTES } from '@/constants/routes';

import styles from './logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <Link to={ROUTES.home.page} className={styles.logo}>
      <img src={logoImg} width={40} height={40} alt="logo" className={styles.logo__image} />
      <div className={styles.logo__info}>
        <h3 className={styles['logo__info-title']}>React Sneakers</h3>
        <p className={styles['logo__info-description']}>Магазин лучших кроссовок</p>
      </div>
    </Link>
  );
};
