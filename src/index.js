import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './redux/store'
import HomePage from './layouts/homePage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);