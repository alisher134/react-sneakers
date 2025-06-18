import { Logo } from '@/components/common/Logo';

import { HeaderActions } from './HeaderActions';
import styles from './header.module.scss';

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<Logo />

				<HeaderActions />
			</div>
		</header>
	);
};
