import AuthForm from '@src/components/organism/AuthForm';
import { signUpAPI } from '@src/apis/auth';
import AppLayout from '@src/components/atoms/AppLayout';

const SignUp = () => {
  return (
    <AppLayout>
      <h2>회원가입</h2>
      <AuthForm buttonValue="회원가입" handleLoginAPI={signUpAPI} />
    </AppLayout>
  );
};

export default SignUp;
