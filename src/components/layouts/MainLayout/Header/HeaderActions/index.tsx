import { CircleUser, Heart, ShoppingCart } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

import { CartDrawer } from './CartDrawer';
import { HeaderActionItem } from './HeaderActionItem';
import styles from './header-actions.module.scss';
import { useHeaderActions } from './useHeaderActions';

export const HeaderActions: React.FC = () => {
	const { isOpenCart, setIsOpenCart, handleProfile } = useHeaderActions();

	return (
		<div className={styles['header-actions']}>
			<HeaderActionItem
				icon={<ShoppingCart className={styles['header-actions__icon']} />}
				label="1205 ₸"
				onClick={() => setIsOpenCart(true)}
			/>

			{isOpenCart && <CartDrawer isOpen={isOpenCart} onClose={() => setIsOpenCart(false)} />}

			<HeaderActionItem
				icon={<Heart className={styles['header-actions__icon']} />}
				label="Закладки"
				to={ROUTES.favorites.page}
				as="link"
			/>

			<HeaderActionItem
				icon={<CircleUser className={styles['header-actions__icon']} />}
				label="Профиль"
				onClick={handleProfile}
			/>
		</div>
	);
};
