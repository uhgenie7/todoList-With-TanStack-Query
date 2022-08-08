import Button from '@src/components/atoms/Button';
import LoginForm from '@src/components/organism/LoginForm';

const Auth = () => {
  const handleNavigateSignUp = () => {
    console.log('회원가입');
  };

  return (
    <>
      <LoginForm />
      <Button isCorrect={true} buttonValue="회원가입" onClick={handleNavigateSignUp} />
    </>
  );
};

export default Auth;
