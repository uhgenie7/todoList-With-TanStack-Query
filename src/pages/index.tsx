import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import showToast from '@src/libs/common';
import { Suspense } from 'react';
import AppLayout from '@src/components/atoms/AppLayout';

const Home: NextPage = () => {
  const toast = showToast();
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      toast.success('로그인 먼저 해주세요');
      router.push('/auth');
    }
  }, []);
  return (
    <div>
      <Head>
        <title>wanted-pre-onboarding-challenge-fe-1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <Suspense fallback={`loading`}>
          <h1>Home</h1>
          <p>여기는 루트입니다</p>
        </Suspense>
      </AppLayout>
    </div>
  );
};

export default Home;
