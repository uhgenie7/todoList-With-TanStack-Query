import AuthForm from '@src/components/organism/AuthForm';
import { useLoginQuery } from '@src/hooks/query/auth';
import AsyncBoundary from '../boundaries/AsyncBoundary';
import DefaultErrorFallback from '../atoms/DefaultErrorFallback';
import PageLoader from '../atoms/PageLoader';

const LoginPage = () => {
  return (
    <>
      <h2>로그인</h2>
      <div className="center">
        <AsyncBoundary rejectedFallback={DefaultErrorFallback} pendingFallback={<PageLoader />}>
          <AuthForm useQuery={useLoginQuery} buttonValue="로그인" />
        </AsyncBoundary>
      </div>
    </>
  );
};

export default LoginPage;
