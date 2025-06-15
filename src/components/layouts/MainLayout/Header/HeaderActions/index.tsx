import clsx from 'clsx';
import { CircleUser, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import styles from './header-actions.module.scss';

export const HeaderActions: React.FC = () => {
  return (
    <div className={styles['header-actions']}>
      <button className={clsx(styles['header-actions__item'], styles['header-actions__button'])}>
        <ShoppingCart className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>1205 ₸</span>
      </button>

      <Link
        to={ROUTES.favorites.page}
        className={clsx(styles['header-actions__item'], styles['header-actions__link'])}
      >
        <Heart className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>Закладки</span>
      </Link>

      <button className={clsx(styles['header-actions__item'], styles['header-actions__button'])}>
        <CircleUser className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>Профиль</span>
      </button>
    </div>
  );
};
