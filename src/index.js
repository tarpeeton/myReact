import store from './datas/store-reducer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



let root = ReactDOM.createRoot(document.getElementById('root'));
let  refreshdoms = (state) => {
  root.render(<App 
    state={state}
     dispatch = {store.dispatch.bind(store)}
     />);
}

refreshdoms(store.getState());
store.subscribe(() => {
  let state = store.getState();
  refreshdoms(state);
})
