import { useRecoilValue } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import { useUserActions } from '@src/utils/user';
import Button from '@src/components/atoms/Button';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoginState);
  const userActions = useUserActions();
  return (
    isLoggedIn && (
      <header>{<Button buttonValue="로그아웃" isCorrect={true} onClick={userActions.handleLogout} />}</header>
    )
  );
};

export default Header;
