import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import ScrollToTop from 'components/scroll-to-top/ScrollToTop.jsx';
import * as serviceWorker from './serviceWorker.js';

import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';

const app = (
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

render(app, document.getElementById('root'));
serviceWorker.unregister();
