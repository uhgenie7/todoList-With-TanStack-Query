import { render } from '@testing-library/react';
import NotFound from '@src/pages/404';
import '@testing-library/jest-dom';

describe('<NotFound />', () => {
  it('render 404 desc', () => {
    const { getByText } = render(<NotFound />);
    const paragraph = getByText('404 페이지 입니다.');
    expect(paragraph).toBeInTheDocument();
  });
});
