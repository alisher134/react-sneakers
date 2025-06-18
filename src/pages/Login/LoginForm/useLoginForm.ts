import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { ROUTES } from '@/constants/routes';

import { errorCatch } from '@/utils/errorCatch';

import { authService } from '@/services/auth/authService';

import type { LoginFormValues } from './types';

export const useLoginForm = () => {
	const navigate = useNavigate();

	const { mutateAsync: login, isPending } = useMutation({
		mutationKey: ['auth/login'],
		mutationFn: (data: LoginFormValues) => authService.login(data),
		onSuccess() {
			toast.success('Авторизация прошла успешно!');
			navigate(ROUTES.home.page);
		},
		onError(error: AxiosError) {
			toast.error(errorCatch(error));
		},
	});

	return { login, isPending };
};
