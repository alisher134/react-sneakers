import { ACCESS_TOKEN } from '@/constants/cookie';

import { getCookie } from '@/utils/cookies';

export const useAuth = () => {
	const accessToken = getCookie(ACCESS_TOKEN);

	return {
		isAuth: !!accessToken,
	};
};
