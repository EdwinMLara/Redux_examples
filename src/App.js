import React from 'react';
import './App.css';
import CakeContainer from './components2/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components2/HookCakeContainer';
import IceCreamContainer from './components2/IceCreamContainer';
import NewCakeContainer from './components2/NewCakeContainer';
import ItemContainer from './components2/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake/>
        <ItemContainer/>
        <HookCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
