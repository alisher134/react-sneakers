import { MoveLeft } from 'lucide-react';

import emptyCartImage from '@/assets/images/cart-empty.png';

import { Button } from '@/components/ui/Button';

import styles from './cart-drawer-empty.module.scss';

interface Props {
	onClose: () => void;
}

export const CartDrawerEmpty: React.FC<Props> = ({ onClose }) => {
	return (
		<div className={styles['cart-drawer__empty']}>
			<img
				src={emptyCartImage}
				width={120}
				alt="empty-cart"
				className={styles['cart-drawer__empty-image']}
			/>
			<h3 className={styles['cart-drawer__empty-title']}>Cart is empty</h3>
			<p className={styles['cart-drawer__empty-text']}>Add at least one item to the order</p>
			<Button preffix={<MoveLeft />} onClick={onClose}>
				Вернуться назад
			</Button>
		</div>
	);
};
