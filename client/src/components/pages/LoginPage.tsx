import AuthForm from '@src/components/organism/AuthForm';
import { useLoginQuery } from '@src/hooks/query/auth';

const LoginPage = () => {
  return (
    <>
      <h2>로그인</h2>
      <div className="center">
        <AuthForm useQuery={useLoginQuery} buttonValue="로그인" />
      </div>
    </>
  );
};

export default LoginPage;
