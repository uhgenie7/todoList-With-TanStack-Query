import { useState, useCallback, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import InputForm from '../molecules/InputForm';
import Button from '@src/components/atoms/Button';
import { instance } from '@src/pages/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const emailValue = e.target.value;
      setEmail(emailValue);

      const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

      if (emailRegEx.test(emailValue)) {
        setIsEmail(true);
      } else {
        setIsEmail(false);
      }
    },
    [email],
  );

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const passwordValue = e.target.value;
      setPassword(passwordValue);

      if (passwordValue.length >= 8) {
        setIsPassword(true);
      } else {
        setIsPassword(false);
      }
    },
    [password],
  );

  useEffect(() => {
    isEmail && isPassword ? setIsCorrect(true) : setIsCorrect(false);
  }, [email, password]);

  const handleLogin = useCallback(async () => {
    try {
      const response = await instance.post('/users/login', {
        email,
        password,
      });

      return { status: response.status, ...response.data };
    } catch (error) {
      if (error.status === 400) {
        console.log(error);
        alert(error.data.details);
      }
    }
  }, [email, password]);

  return (
    <div>
      <InputForm
        labelValue="이메일"
        labelFor="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={onChangeEmail}
        type="email"
        isError={!isEmail}
        errorMessage={'이메일 형식을 확인해주세요'}
      />
      <InputForm
        labelFor="password"
        labelValue="패스워드"
        placeholder="패스워드를 입력해주세요"
        value={password}
        onChange={onChangePassword}
        type="password"
        isError={!isPassword}
        errorMessage={'8자리 이상 입력해주세요'}
      />
      <Button isCorrect={isCorrect} buttonValue="로그인" onClick={handleLogin} />
    </div>
  );
};

export default LoginForm;
