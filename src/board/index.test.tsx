import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import Board from './';
import { parseBoard } from './utils';
import WS from "jest-websocket-mock";

test('renders board', () => {
  render(
    <Provider store={store}>
        <Board/>
    </Provider>
  );
});

test('test parseBoard function', () => {

    var boardString = "map:\n123\n456\n789"; 
    const boardArray = [["1","2","3"],["4","5","6"],["7","8","9"]]; 

    expect(parseBoard(boardString)).toStrictEqual(boardArray);
})
