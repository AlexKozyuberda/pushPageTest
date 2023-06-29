import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { App } from './App';
import { store } from './lib/redux/init/store';
import { StyledGlobal } from './theme/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <StyledGlobal />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
