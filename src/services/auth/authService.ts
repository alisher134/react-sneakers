import { API_PATHS } from '@/constants/api';
import { ACCESS_TOKEN } from '@/constants/cookie';

import { setCookie } from '@/utils/cookies';

import { publicApi } from '@/api/axios';

import type { LoginFormValues } from '@/pages/Login/LoginForm/types';
import type { RegisterFormValues } from '@/pages/Register/RegisterForm/types';

import type { AuthResponse } from './types';

export const authService = {
	async login(data: LoginFormValues) {
		const response = await publicApi<AuthResponse>({
			method: 'post',
			url: API_PATHS.auth.login,
			data,
		});

		setCookie(ACCESS_TOKEN, response.data.accessToken);

		return response.data;
	},

	async register(data: RegisterFormValues) {
		const response = await publicApi<AuthResponse>({
			method: 'post',
			url: API_PATHS.auth.register,
			data,
		});

		setCookie(ACCESS_TOKEN, response.data.accessToken);

		return response.data;
	},

	async refresh() {
		const response = await publicApi<AuthResponse>({ method: 'post', url: API_PATHS.auth.refresh });

		setCookie(ACCESS_TOKEN, response.data.accessToken);

		return response.data;
	},

	async logout() {
		return publicApi<AuthResponse>({ method: 'post', url: API_PATHS.auth.logout });
	},
};
