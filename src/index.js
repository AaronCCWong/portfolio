import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker.js';

import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
