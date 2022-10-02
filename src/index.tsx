import { render } from 'react-snapshot';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { ScrollToTop } from './components/scroll-to-top/ScrollToTop';

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
