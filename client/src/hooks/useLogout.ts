import { USER_TOKEN } from '@src/constants';
import { useAppDispatch } from '@src/hooks/useDispatch';
import { loggedInAction } from '@src/reducers/userSlice';
import { useRouter } from 'next/router';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    if (confirm('정말 로그아웃 하시겠습니까?')) {
      localStorage.removeItem(USER_TOKEN);
      dispatch(loggedInAction(false));
      router.replace('/auth');
    }
  };

  return {
    handleLogout,
  };
};
