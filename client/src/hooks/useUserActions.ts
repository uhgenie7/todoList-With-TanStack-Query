import { useRecoilState } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import { instance } from '@src/apis';
import { USER_TOKEN } from '@src/constants';
import type { IUserInfo } from '@src/types/userAuthTypes';

export const useUserActions = () => {
  const [isLogged, setIsLogged] = useRecoilState<string | null>(isLoginState);

  const handleLogin = async (data: IUserInfo) => {
    try {
      const response = await instance.post('/users/login', data);
      console.log(response);
      localStorage.setItem(USER_TOKEN, JSON.stringify(response.token));
      setIsLogged(USER_TOKEN);
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_TOKEN);
    setIsLogged(null);
  };

  const handleSignUp = async (data: IUserInfo) => {
    try {
      const response = await instance.post('/users/create', data);
      console.log(response);
      localStorage.setItem('USER_TOKEN', JSON.stringify(response.token));
      console.log(response);
      setIsLogged(USER_TOKEN);
      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    handleLogin,
    handleLogout,
    handleSignUp,
  };
};
