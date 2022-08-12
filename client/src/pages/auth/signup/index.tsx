import AuthForm from '@src/components/organism/AuthForm';
import { signUpAPI } from '@src/apis/auth';

const SignUp = () => {
  return (
    <>
      <h2>회원가입</h2>
      <AuthForm buttonValue="회원가입" handleLoginAPI={signUpAPI} />
    </>
  );
};

export default SignUp;
