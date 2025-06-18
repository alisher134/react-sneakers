import { Outlet } from 'react-router-dom';

import { AutoScrollToTop } from '@/components/ui/AutoScrollToTop';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from './main-layout.module.scss';

export const MainLayout: React.FC = () => {
	return (
		<main className={styles.wrapper}>
			<AutoScrollToTop>
				<Header />

				<div className={styles.content}>
					<Outlet />
				</div>

				<Footer />
			</AutoScrollToTop>
		</main>
	);
};
