import AuthForm from '@src/components/organism/AuthForm';
import { useSignUpQuery } from '@src/hooks/query/auth';
import DefaultErrorFallback from '@src/components/atoms/DefaultErrorFallback';
import ErrorBoundary from '@src/components/boundaries/ErrorBoundary';

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <ErrorBoundary renderFallback={DefaultErrorFallback}>
        <AuthForm useQuery={useSignUpQuery} buttonValue="회원가입" />
      </ErrorBoundary>
    </>
  );
};

export default SignUp;
