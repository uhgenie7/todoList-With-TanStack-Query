import React, { InputHTMLAttributes, ForwardedRef } from 'react';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelFor?: string;
}

const Input = React.forwardRef(({ labelFor, ...props }: IProps, ref?: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <Container ref={ref} id={labelFor} {...props} />
    </>
  );
});
export default Input;

const Container = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 1px solid var(--main);
`;
