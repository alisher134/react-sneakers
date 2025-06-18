import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { MainLayout } from '@/components/layouts/MainLayout';
import { UnAuthRoute } from '@/components/ui/UnAuthRoute';

import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Login';
import RegisterPage from '@/pages/Register';

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route
						path={ROUTES.auth.login.route}
						element={
							<UnAuthRoute>
								<LoginPage />
							</UnAuthRoute>
						}
					/>
					<Route
						path={ROUTES.auth.register.route}
						element={
							<UnAuthRoute>
								<RegisterPage />
							</UnAuthRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
