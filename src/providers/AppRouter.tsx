import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/layouts/MainLayout';

import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';

import { ROUTES } from '@/constants/routes';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.login.route} element={<LoginPage />} />
          <Route path={ROUTES.register.route} element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
