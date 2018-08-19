import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import { unregister } from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
unregister();
