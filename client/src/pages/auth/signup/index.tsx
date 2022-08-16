import AuthForm from '@src/components/organism/AuthForm';
import { useSignUpQuery } from '@src/hooks/query/auth';
import AsyncBoundary from '@src/components/boundaries/AsyncBoundary';
import DefaultErrorFallback from '@src/components/atoms/DefaultErrorFallback';
import PageLoader from '@src/components/atoms/PageLoader';

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <AsyncBoundary rejectedFallback={DefaultErrorFallback} pendingFallback={<PageLoader />}>
        <AuthForm useQuery={useSignUpQuery} buttonValue="회원가입" />
      </AsyncBoundary>
    </>
  );
};

export default SignUp;
