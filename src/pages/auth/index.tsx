import { useEffect } from 'react';
import Button from '@src/components/atoms/Button';
import Form from '@src/components/organism/Form';
import { useRouter } from 'next/router';
import { loginAPI } from '@src/apis/auth';
import styled from 'styled-components';
import AppLayout from '@src/components/atoms/AppLayout';

const Auth = () => {
  const router = useRouter();
  const handleNavigateSignUp = () => router.push('/auth/signup');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/');
    }
  }, []);

  return (
    <Container>
      <h2>로그인</h2>
      <div className="center">
        <Form buttonValue="로그인" handleAPI={loginAPI} />
        <Button isCorrect={true} buttonValue="회원가입" onClick={handleNavigateSignUp} />
      </div>
    </Container>
  );
};

export default Auth;

const Container = styled(AppLayout)`
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
