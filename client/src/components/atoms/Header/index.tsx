import { useLogout } from '@src/hooks/useLogout';
import Button from '@src/components/atoms/Button';
import { useAppSelector } from '@src/hooks/useSelector';

const Header = () => {
  const logoutAction = useLogout();
  const isAuthenticated = useAppSelector((state) => state.user.isLoggedIn);

  return (
    <header>
      {isAuthenticated ? (
        <Button buttonValue="로그아웃" isCorrect={true} onClick={logoutAction.handleLogout} />
      ) : (
        <h1>어서오세요</h1>
      )}
    </header>
  );
};

export default Header;
