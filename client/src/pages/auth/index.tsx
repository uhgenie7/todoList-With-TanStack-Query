import Button from '@src/components/atoms/Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import LoginPage from '@src/components/pages/LoginPage';

const Auth = () => {
  const router = useRouter();
  const handleNavigateSignUp = () => router.push('/auth/signup');

  return (
    <Container>
      <LoginPage />
      <Button isCorrect={true} buttonValue="회원가입" onClick={handleNavigateSignUp} />
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
