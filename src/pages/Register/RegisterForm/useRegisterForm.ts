import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { ROUTES } from '@/constants/routes';

import { errorCatch } from '@/utils/errorCatch';

import { authService } from '@/services/auth/authService';

import type { RegisterFormValues } from './types';

export const useRegisterForm = () => {
	const navigate = useNavigate();

	const { mutateAsync: register, isPending } = useMutation({
		mutationKey: ['auth/register'],
		mutationFn: (data: RegisterFormValues) => authService.register(data),
		onSuccess() {
			toast.success('Регистрация прошла успешно!');
			navigate(ROUTES.home.page);
		},
		onError(error: AxiosError) {
			toast.error(errorCatch(error));
		},
	});

	return { register, isPending };
};
