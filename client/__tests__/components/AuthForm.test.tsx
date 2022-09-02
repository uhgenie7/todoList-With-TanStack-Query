import { render, fireEvent } from '@testing-library/react';
import AuthForm from '@src/components/organism/AuthForm';

describe('<AuthForm />', () => {
  it('이메일, 패스워드가 올바른가?', () => {
    const { getByText, getByLabelText } = render(<AuthForm buttonValue={'로그인'} />);
    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('패스워드');

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: 'test@naver.com' } });
    fireEvent.change(password, { target: { value: 'qwe123!@#' } });

    expect(button).toBeEnabled();
  });

  it('버튼 클릭 시 폼 제출 테스트', () => {
    const onSubmit = jest.fn();
    const { getByText, getByLabelText } = render(<AuthForm buttonValue={'로그인'} />);

    const button = getByText('로그인');
    const email = getByLabelText('이메일');
    const password = getByLabelText('비밀번호');

    fireEvent.change(email, { target: { value: 'test@naver.com' } });
    fireEvent.change(password, { target: { value: 'qwe123!@#' } });

    fireEvent.click(button);

    expect(onSubmit).toBeCalledWith(1);
  });
});
