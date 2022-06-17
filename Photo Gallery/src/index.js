import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import{ Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './galleryState';

const store = configureStore({
  reducer : {
    gallery : galleryReducer
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
