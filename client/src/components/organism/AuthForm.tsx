import { useState, useCallback, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import InputForm from '../molecules/InputForm';
import Button from '@src/components/atoms/Button';
import styled from 'styled-components';
import { IFormProps } from '@src/types/userAuthTypes';
import customToast from '@src/utils/customToast';
import { onEnterEvent } from '@src/utils/onEnterEvent';

const AuthForm = ({ buttonValue, useQuery }: IFormProps) => {
  const inputFocus = useRef<HTMLInputElement>(null);
  const toast = customToast();
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

  const { mutate: onSubmit } = useQuery({
    userInfo: { email, password },
    errorHandler: (message: string) => toast.error(message),
  });

  const handleSubmitAuthForm = () => {
    if (isCorrect && !!email && !!password) {
      onSubmit();
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container>
      <div>
        <div className="inputWrapper">
          <InputForm
            labelValue="?????????"
            labelFor="email"
            placeholder="???????????? ??????????????????"
            value={email}
            onChange={onChangeEmail}
            type="email"
            isError={!isEmail && isEmail !== null}
            errorMessage={'????????? ????????? ??????????????????'}
            onKeyDown={(e) => onEnterEvent(e, () => inputFocus?.current?.focus())}
          />
        </div>
        <div className="inputWrapper">
          <InputForm
            ref={inputFocus}
            labelFor="password"
            labelValue="????????????"
            placeholder="??????????????? ??????????????????"
            value={password}
            onChange={onChangePassword}
            type="password"
            isError={!isPassword && isPassword !== null}
            errorMessage={'8?????? ?????? ??????????????????'}
            onKeyDown={(e) => onEnterEvent(e, () => handleSubmitAuthForm())}
          />
        </div>
        <ButtonWrapper isCorrect={isCorrect} onClick={handleSubmitAuthForm}>
          {buttonValue}
        </ButtonWrapper>
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
