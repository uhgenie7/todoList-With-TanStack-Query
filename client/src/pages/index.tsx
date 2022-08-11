import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import { useRouter } from 'next/router';

import AuthLayout from '@src/components/atoms/AuthLayout';
import Todos from '@src/components/organism/Todos';
import { getTodosAPI } from '@src/apis/todos';
import { ITodoArr } from '@src/types';
import { Suspense } from 'react';

const Home = ({ todos = [] }: ITodoArr) => {
  const isLoggedIn = useRecoilValue(isLoginState);

  return (
    <div>
      <Head>
        <title>wanted-pre-onboarding-challenge-fe-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        {isLoggedIn ? (
          <Suspense fallback={<div>loading</div>}>
            <Todos todos={todos} />
          </Suspense>
        ) : (
          <>로그인</>
        )}
      </AuthLayout>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // const { data: todos } = await getTodosAPI(); 타입 정의가 너무 어려움
  const data = await getTodosAPI();
  const todos = data?.data;

  return {
    props: { todos },
  };
};
