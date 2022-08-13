import { useEffect } from 'react';
import Button from '@src/components/atoms/Button';
import AuthForm from '@src/components/organism/AuthForm';
import { useRouter } from 'next/router';
import { loginAPI } from '@src/apis/auth';
import styled from 'styled-components';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';

const Auth = () => {
  const router = useRouter();
  const handleNavigateSignUp = () => router.push('/auth/signup');

  return (
    <Container>
      <h2>로그인</h2>
      <div className="center">
        <AuthForm queryKey={QueryUserAuthKeys.login} buttonValue="로그인" handleLoginAPI={loginAPI} />
        <Button isCorrect={true} buttonValue="회원가입" onClick={handleNavigateSignUp} />
      </div>
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
