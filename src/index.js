import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import TodoList from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TodoList />
  </Provider>
);
