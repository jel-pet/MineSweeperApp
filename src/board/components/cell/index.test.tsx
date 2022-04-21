import { render } from '@testing-library/react';
import Cell from './';

test('renders cell', () => {
  const handleClick = () =>{}

  render(<Cell value="1" onClick={handleClick} />);
});