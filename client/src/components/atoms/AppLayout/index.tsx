import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useToast from '@src/hooks/useToast';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { USER_TOKEN } from '@src/constants';
import { ISSERVER } from '@src/constants';
interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  // const [isLoggedIn, setIsLoggedIn] = useState<string | false | null>(null);
  // const router = useRouter();
  // const toast = useToast();
  // const currentPageName = router.pathname;
  // const pageRootName = currentPageName.slice(1).split('/')[0];
  // const protectedPages = ['', '/', '[id]'];
  // const isPublicPage = !protectedPages.includes(pageRootName);

  // useEffect(() => {
  //   setIsLoggedIn(!ISSERVER && localStorage.getItem(USER_TOKEN));
  // }, []);

  // useEffect(() => {
  //   if (!isPublicPage && !isLoggedIn) {
  //     toast.error('로그인 먼저 해주세요');
  //     router.replace('/auth');
  //   }
  // }, [isLoggedIn, router]);

  // if (!isPublicPage && !isLoggedIn) {
  //   return <div>loading</div>;
  // }

  return (
    <>
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
