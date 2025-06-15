import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/Home';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
