import Head from 'next/head';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from '@src/components/atoms/Header';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>wanted-pre-onboarding-challenge-fe-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Container>
        <div className="headerWrapper">
          <Header />
        </div>
        {children}
      </Container>
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
  padding-top: 5rem;

  .headerWrapper {
    width: 100%;
    position: fixed;
    top: 0;
  }
`;
