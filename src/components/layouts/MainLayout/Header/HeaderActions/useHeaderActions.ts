import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/hooks/useAuth';

export const useHeaderActions = () => {
	const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

	const { isAuth } = useAuth();
	const navigate = useNavigate();

	const handleProfile = () => {
		if (!isAuth) navigate(ROUTES.auth.login.page);
		navigate(ROUTES.profile.page);
	};

	return { isOpenCart, setIsOpenCart, handleProfile };
};
