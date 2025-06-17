import cookies from 'js-cookie';

export const useAuth = () => {
  const accessToken = cookies.get('accessToken');

  return {
    isAuth: !!accessToken,
  };
};
