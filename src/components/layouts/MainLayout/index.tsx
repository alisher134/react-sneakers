import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import styles from './main-layout.module.scss';

export const MainLayout: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};
