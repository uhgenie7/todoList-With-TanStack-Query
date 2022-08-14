import AuthForm from '@src/components/organism/AuthForm';
import { useSignUpQuery } from '@src/hooks/query/auth';

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <AuthForm useQuery={useSignUpQuery} buttonValue="회원가입" />
    </>
  );
};

export default SignUp;
