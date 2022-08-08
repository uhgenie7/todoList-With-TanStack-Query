import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  buttonValue: string;
  isCorrect: boolean;
}

const Button = ({ buttonValue, isCorrect, onClick, ...props }: IProps) => {
  return (
    <ButtonWrapper isCorrect={isCorrect} onClick={onClick} {...props}>
      {buttonValue}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ isCorrect: boolean }>`
  background: ${({ isCorrect }) => (isCorrect ? 'skyblue' : 'gray')};
  color: ${({ isCorrect }) => (isCorrect ? 'gray' : 'skyblue')};
`;
