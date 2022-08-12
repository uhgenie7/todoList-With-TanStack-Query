import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useToast from '@src/hooks/useToast';
import Header from '@src/components/atoms/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  const router = useRouter();
  const pathname = router.pathname;
  const toast = useToast();
  const isLoggedIn = useRecoilValue(isLoginState);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/auth');
      if (pathname === '/auth') {
        toast.error('로그인 먼저 해주세요');
      }
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && <Header />}
      <ToastContainer />
      <Container>{children}</Container>
    </>
  );
};

export default AppLayout;

const Container = styled.div`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
