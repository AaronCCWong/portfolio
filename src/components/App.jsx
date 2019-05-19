import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from 'components/portfolio/Portfolio.jsx';
import PosTagger from 'components/pos-tagger/PosTagger.jsx'
import TicTacToe from 'components/tictactoe/TicTacToe.jsx';

import './App.scss';

const App = () => (
  <Switch>
    <Route exact path="/pos-tagger" component={PosTagger} />
    <Route exact path="/tic-tac-toe" component={TicTacToe} />
    <Route exact path="/" component={Portfolio} />
  </Switch>
);

export default App;
