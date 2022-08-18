import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isCorrect: boolean;
}

const Button = ({ isCorrect, children, ...props }: IProps): JSX.Element => {
  return (
    <ButtonWrapper isCorrect={isCorrect} {...props}>
      {children}
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
  &:hover {
    box-shadow: ${({ isCorrect }) =>
      isCorrect ? 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' : '0'};
  }
`;
