import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/hooks/useAuth';

interface Props {
	children: React.ReactNode;
}

export const UnAuthRoute: React.FC<Props> = ({ children }) => {
	const { isAuth } = useAuth();
	const replaceUrl = ROUTES.home.page;

	return isAuth ? <Navigate to={replaceUrl} /> : <>{children}</>;
};
