import { render } from '@testing-library/react';
import App from './App';
import Header from './common/header';

test('renders app elements', () => {
  render(<App />);
  render(<Header />);
});

// it("renders App header", () => {
//   const wrapper = shallow(<App />);
//   const header = <Header/>;
//   expect(wrapper.contains(header)).toEqual(true);
// });

test('renders board', () => {
  //render(<Board />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
