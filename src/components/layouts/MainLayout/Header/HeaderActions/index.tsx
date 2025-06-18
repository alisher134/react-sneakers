import clsx from 'clsx';
import { CircleUser, Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/hooks/useAuth';

import { CartDrawer } from './CartDrawer';
import styles from './header-actions.module.scss';

export const HeaderActions: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const handleProfile = () => {
    if (!isAuth) navigate(ROUTES.auth.login.page);
  };

  return (
    <div className={styles['header-actions']}>
      <button
        className={clsx(styles['header-actions__item'], styles['header-actions__button'])}
        onClick={() => setIsOpenCart(true)}
      >
        <ShoppingCart className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>1205 ₸</span>
      </button>

      {isOpenCart && <CartDrawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />}

      <Link
        className={clsx(styles['header-actions__item'], styles['header-actions__link'])}
        to={ROUTES.favorites.page}
      >
        <Heart className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>Закладки</span>
      </Link>

      <button
        className={clsx(styles['header-actions__item'], styles['header-actions__button'])}
        onClick={handleProfile}
      >
        <CircleUser className={styles['header-actions__icon']} />
        <span className={styles['header-actions__text']}>Профиль</span>
      </button>
    </div>
  );
};
