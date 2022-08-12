import AuthForm from '@src/components/organism/AuthForm';
import { signUpAPI } from '@src/apis/auth';
import { QueryUserAuthKeys } from '@src/constants/QueryUserAuthKeys';

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <AuthForm queryKey={QueryUserAuthKeys.signUp} buttonValue="회원가입" handleLoginAPI={signUpAPI} />
    </>
  );
};

export default SignUp;
