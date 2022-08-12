import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Todos from '@src/components/organism/Todos';
import { getTodoListAPI } from '@src/apis/todos';
import { Suspense } from 'react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>wanted-pre-onboarding-challenge-fe-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={<div>loading</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: todos } = await getTodoListAPI();

  return {
    props: { todos },
  };
};
