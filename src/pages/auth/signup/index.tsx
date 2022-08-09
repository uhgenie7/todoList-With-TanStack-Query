import Form from '@src/components/organism/Form';
import { signUpAPI } from '@src/apis/auth';
import AppLayout from '@src/components/atoms/AppLayout';

const SignUp = () => {
  return (
    <AppLayout>
      <h2>회원가입</h2>
      <Form buttonValue="회원가입" handleAPI={signUpAPI} />
    </AppLayout>
  );
};

export default SignUp;
