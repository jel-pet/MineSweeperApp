import { Provider } from 'react-redux';
import Board from './board';
import Header from './common/header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        <Header/>
        <Board/>
      </header>
    </Provider>
  );
}

export default App;
