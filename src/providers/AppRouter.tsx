import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/layouts/MainLayout';

import HomePage from '@/pages/Home';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
