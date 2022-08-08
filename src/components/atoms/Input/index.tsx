import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  labelFor: string;
}

const Input = ({ labelFor, ...props }: IProps) => {
  return (
    <>
      <input id={labelFor} {...props} />
    </>
  );
};
export default Input;
