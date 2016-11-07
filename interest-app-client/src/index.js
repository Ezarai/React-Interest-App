import React from 'react':
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);