import { X } from 'lucide-react';

import { Drawer } from '@/components/ui/Drawer';

import styles from './cart-drawer.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <div className={styles['cart-drawer']}>
        <div className={styles['cart-drawer__header']}>
          <h3 className={styles['cart-drawer__title']}>Корзина</h3>
          <button onClick={onClose} className={styles['cart-drawer__close']}>
            <X className={styles['cart-drawer__icon']} />
          </button>
        </div>
      </div>
    </Drawer>
  );
};
