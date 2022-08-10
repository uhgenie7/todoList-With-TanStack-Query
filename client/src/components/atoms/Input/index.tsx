import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelFor?: string;
}

const Input = ({ labelFor, ...props }: IProps) => {
  return (
    <>
      <Container id={labelFor} {...props} />
    </>
  );
};
export default Input;

const Container = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 1px solid var(--main);
`;
