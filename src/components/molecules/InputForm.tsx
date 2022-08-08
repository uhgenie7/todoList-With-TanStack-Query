import { InputHTMLAttributes } from 'react';
import Label from '@src/components/atoms/Label';
import Input from '@src/components/atoms/Input';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelFor: string;
  labelValue: string;
  value: string;
  isError: boolean;
  errorMessage: string;
}

const InputForm = ({ labelFor, labelValue, errorMessage, isError, ...props }: IProps) => {
  return (
    <>
      <Label labelFor={labelFor} labelValue={String(labelValue)} />
      <Input labelFor={labelFor} {...props} />
      {isError && <p>{errorMessage}</p>}
    </>
  );
};

export default InputForm;
