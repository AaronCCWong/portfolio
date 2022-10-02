import { Routes, Route } from 'react-router-dom';

import { Portfolio } from './portfolio/Portfolio';
import { PosTagger } from './pos-tagger/PosTagger'
import { TicTacToe } from './tictactoe/TicTacToe';

import './App.scss';

const App = () => (
  <Routes>
    <Route path="/pos-tagger" element={<PosTagger />} />
    <Route path="/tic-tac-toe" element={<TicTacToe />} />
    <Route path="/" element={<Portfolio />} />
  </Routes>
);

export default App;
