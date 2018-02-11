import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from 'components/portfolio/Portfolio.jsx';

const App = () => (
  <Switch>
    <Route path="/" component={Portfolio} />
  </Switch>
);

export default App;
