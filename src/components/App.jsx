import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from 'components/portfolio/Portfolio.jsx';
import TicTacToe from 'components/tictactoe/TicTacToe.jsx';

const App = () => (
  <Switch>
    <Route exact path="/tic-tac-toe" component={TicTacToe} />
    <Route exact path="/" component={Portfolio} />
  </Switch>
);

export default App;
