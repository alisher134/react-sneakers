import { Navigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/hooks/useAuth';

interface Props {
	children: React.ReactNode;
}

export const AuthRoute: React.FC<Props> = ({ children }) => {
	const { isAuth } = useAuth();
	const replaceUrl = ROUTES.auth.login.page;

	return isAuth ? <>{children}</> : <Navigate to={replaceUrl} />;
};
