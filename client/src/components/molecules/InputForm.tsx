import React, { InputHTMLAttributes, ForwardedRef } from 'react';
import Label from '@src/components/atoms/Label';
import Input from '@src/components/atoms/Input';
import styled from 'styled-components';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelFor: string;
  labelValue: string;
  isError?: boolean;
  errorMessage?: string;
}

const InputForm = React.forwardRef(
  ({ labelFor, labelValue, errorMessage, isError, ...props }: IProps, ref?: ForwardedRef<HTMLDivElement>) => {
    return (
      <Container ref={ref}>
        <Label labelFor={labelFor} labelValue={String(labelValue)} />
        <Input labelFor={labelFor} {...props} />
        {isError && <p>! {errorMessage}</p>}
      </Container>
    );
  },
);

export default InputForm;

const Container = styled.div`
  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: var(--danger);
  }
`;
