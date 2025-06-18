import axios from 'axios';

import { API_URL } from '@/constants/app';

export const publicApi = axios.create({
	baseURL: API_URL,
	withCredentials: true,
});
