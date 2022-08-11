import { useRecoilState } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import { instance } from '@src/apis';
import { USER_TOKEN } from '@src/constants';

export const useUserActions = () => {
  const [isLogged, setIsLogged] = useRecoilState(isLoginState);

  const handleLogin = async (data: any) => {
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

  const handleSignUp = async (data: any) => {
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
