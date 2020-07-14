import React from 'react';
import './App.css';
import CakeContainer from './components2/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components2/HookCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer/>
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
