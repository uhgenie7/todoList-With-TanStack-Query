import AuthForm from '@src/components/organism/AuthForm';
import { useLoginQuery } from '@src/hooks/query/auth';
import DefaultErrorFallback from '@src/components/atoms/DefaultErrorFallback';
import ErrorBoundary from '@src/components/boundaries/ErrorBoundary';

const LoginPage = () => {
  return (
    <>
      <h2>로그인</h2>
      <div className="center">
        <ErrorBoundary renderFallback={DefaultErrorFallback}>
          <AuthForm useQuery={useLoginQuery} buttonValue="로그인" />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default LoginPage;
