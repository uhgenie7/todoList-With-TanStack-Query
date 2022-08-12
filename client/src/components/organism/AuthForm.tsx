import { useState, useCallback, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { isLoginState } from '@src/states/loginState';
import InputForm from '../molecules/InputForm';
import Button from '@src/components/atoms/Button';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import useToast from '@src/hooks/useToast';
import { IAuthResponse } from '@src/types/response';

interface IFormProps {
  buttonValue: string;
  handleLoginAPI: any;
}

const AuthForm = ({ buttonValue, handleLoginAPI }: IFormProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState);

  const toast = useToast();
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState<null | boolean>(null);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState<null | boolean>(null);
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

  // const onClickPostAPI = useCallback(async () => {
  //   const res = await handleLoginAPI({ email, password });
  //   if (res.status === 200) {
  //     router.push('/');
  //   } else {
  //     router.push('/auth');
  //   }
  // }, [email, password]);

  const { mutate: onSignUp } = useMutation(() => handleLoginAPI({ email, password }), {
    onSuccess: async (res: IAuthResponse) => {
      if (res.status === 400 || res.status === 409) {
        toast.error(res.data.details);
      } else {
        toast.success(res.message);
        setIsLoggedIn(true);
        router.push('/');
      }
    },
    onError: async (error) => {
      console.log(error);
    },
  });

  return (
    <Container>
      <div>
        <div className="inputWrapper">
          <InputForm
            labelValue="이메일"
            labelFor="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onChangeEmail}
            type="email"
            isError={!isEmail && isEmail !== null}
            errorMessage={'이메일 형식을 확인해주세요'}
          />
        </div>
        <div className="inputWrapper">
          <InputForm
            labelFor="password"
            labelValue="패스워드"
            placeholder="패스워드를 입력해주세요"
            value={password}
            onChange={onChangePassword}
            type="password"
            isError={!isPassword && isPassword !== null}
            errorMessage={'8자리 이상 입력해주세요'}
          />
        </div>
        <ButtonWrapper isCorrect={isCorrect} buttonValue={buttonValue} onClick={onSignUp} />
      </div>
    </Container>
  );
};

export default AuthForm;

const Container = styled.div`
  .inputWrapper {
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled(Button)`
  margin-bottom: 1rem;
`;
