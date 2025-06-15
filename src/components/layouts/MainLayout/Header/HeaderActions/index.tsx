import clsx from 'clsx';
import { CircleUser, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { CartDrawer } from './CartDrawer';
import styles from './header-actions.module.scss';

export const HeaderActions: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  return (
    <div className={styles['header-actions']}>
      <button
        onClick={() => setIsOpenCart(true)}
        className={clsx(styles['header-actions__item'], styles['header-actions__button'])}
      >
        <ShoppingCart className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>1205 ₸</span>
      </button>

      {isOpenCart && <CartDrawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />}

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
