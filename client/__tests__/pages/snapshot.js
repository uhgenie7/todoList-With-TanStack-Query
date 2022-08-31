import { render } from '@testing-library/react';
import { Sample } from '@src/pages/Sample';

it('renders homepage unchanged', () => {
  const { container } = render(<Sample />);
  expect(container).toMatchSnapshot();
});
