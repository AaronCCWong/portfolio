import React from 'react';
import { render } from 'react-snapshot';

import App from 'components/App.jsx';
import { unregister } from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';

render(
  <App />,
  document.getElementById('root')
);
unregister();
