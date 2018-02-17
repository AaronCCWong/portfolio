import React, { Component } from 'react';
import classNames from 'classnames';

import { Game as TicTacToeGame } from 'util/tictactoe/index.js';
import OMark from 'components/tictactoe/OMark.jsx';
import XMark from 'components/tictactoe/XMark.jsx';

import 'components/tictactoe/TicTacToe.scss';

class TicTacToe extends Component {
  constructor() {
    super();
    this.game = new TicTacToeGame();
    this.state = {
      board: this.game.board,
      gameOver: false,
    };
    this.handleChoosePosition = this.handleChoosePosition.bind(this);
  }

  handleChoosePosition(event) {
    const pos = event.currentTarget.getAttribute('data-position').split(',');
    if (!this.game.board[pos[0]][pos[1]] && !this.state.gameOver) {
      this.game.makeMove(pos);
      this.setState({ board: this.game.board });
      console.log(this.game.won)
      if (this.game.won) {
        this.setState({ gameOver: true });
      }
    }
  }

  renderMark(mark) {
    if (mark === 'x') {
      return <XMark className="ttt-mark--x" />;
    } else if (mark === 'o') {
      return <OMark className="ttt-mark--o" />;
    }
  }

  renderBoardBlocks() {
    const blocks = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        blocks.push(
          <div
            data-position={[i, j]}
            onClick={this.handleChoosePosition}
            className={classNames(
              'ttt-block',
              {
                'ttt-block--selectable': !this.game.board[i][j] && !this.state.gameOver,
              },
            )}
            key={`${i}|${j}`}
          >
            {this.renderMark(this.game.board[i][j])}
          </div>
        );
      }
    }
    return blocks;
  }

  render() {
    return (
      <div className="ttt">
        <div className="ttt-board--wrapper">
          {this.renderBoardBlocks()}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
