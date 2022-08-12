import { useUserActions } from '@src/hooks/useUserActions';
import Button from '@src/components/atoms/Button';

const Header = () => {
  const userActions = useUserActions();
  return <header>{<Button buttonValue="로그아웃" isCorrect={true} onClick={userActions.handleLogout} />}</header>;
};

export default Header;
