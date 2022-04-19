import { createStore } from 'redux';
import { Provider as StateProvider } from 'react-redux'
import { reducer } from '../state';
import { TodoComponent } from './Todo';
import './App.css';

const store = createStore(reducer);

function App() {
  return (
    <StateProvider store={store}>
      <div className="app">
        <TodoComponent />
      </div>
    </StateProvider>
  );
}

export default App;
