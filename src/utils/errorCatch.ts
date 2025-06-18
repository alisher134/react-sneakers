import type { AxiosError } from 'axios';

export const errorCatch = (error: AxiosError): string => {
	if (error) {
		const data = error.response?.data as { message: string };

		return data.message;
	}

	return 'Что-то пошло не так. Попробуйте позже.';
};
