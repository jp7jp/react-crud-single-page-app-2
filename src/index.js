import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers'
import App from './App';
import './index.css';

const store = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
