import AuthForm from '@src/components/organism/AuthForm';
import { signUpAPI } from '@src/apis/auth';
import AppLayout from '@src/components/atoms/AppLayout';
import { useUserActions } from '@src/utils/user';

const SignUp = () => {
  const userActions = useUserActions();

  return (
    <>
      <h2>회원가입</h2>
      <AuthForm buttonValue="회원가입" handleLoginAPI={signUpAPI} />
      {/* <AuthForm buttonValue="회원가입" handleLoginAPI={() => userActions.handleSignUp} /> */}
    </>
  );
};

export default SignUp;
