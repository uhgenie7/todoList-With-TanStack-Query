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
  font-size: 1em;
  font-weight: bold;
  width: 300px;
  padding: 1rem;
  background: ${({ isCorrect }) => (isCorrect ? 'var(--main)' : 'var(--snow)')};
  color: ${({ isCorrect }) => (isCorrect ? 'black' : 'black')};
`;
