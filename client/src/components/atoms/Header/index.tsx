import { useLogout } from '@src/hooks/useLogout';
import Button from '@src/components/atoms/Button';
import { useAppSelector } from '@src/hooks/useSelector';
import styled from 'styled-components';

const Header = () => {
  const logoutAction = useLogout();
  const isAuthenticated = useAppSelector((state) => state.user.isLoggedIn);

  return (
    <HeaderWrapper>
      <div>
        {isAuthenticated ? (
          <LogoutButton isCorrect={true} onClick={logoutAction.handleLogout}>
            로그아웃
          </LogoutButton>
        ) : (
          <h1>어서오세요</h1>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    text-align: center;
    padding: 1rem;
  }
`;

const LogoutButton = styled(Button)`
  width: 100%;
`;
