import AuthForm from '@src/components/organism/AuthForm';
import { useLoginQuery } from '@src/hooks/query/auth';
import ExtendsAsyncBoundary from '../boundaries/ExtendsAsyncBoundary';

const LoginPage = () => {
  return (
    <>
      <h2>로그인</h2>
      <div className="center">
        <ExtendsAsyncBoundary>
          <AuthForm useQuery={useLoginQuery} buttonValue="로그인" />
        </ExtendsAsyncBoundary>
      </div>
    </>
  );
};

export default LoginPage;
