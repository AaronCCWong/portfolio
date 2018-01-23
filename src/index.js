import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

import 'index.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
