import { render } from '@testing-library/react';
import { Sample } from '@src/pages/Sample';
import '@testing-library/jest-dom';

describe('Sample', () => {
  test('should first', () => {
    const { getByText } = render(<Sample />);
    expect(getByText('test jest')).toBeTruthy();
    expect(getByText('ggg')).toBeTruthy();
  });
});
