import React, { useState } from 'react';
import classNames from 'classnames';

import HomeButton from '../home-button/HomeButton';
import { Game as TicTacToeGame } from '../../util/tictactoe/index';
import { OMark } from './OMark';
import { XMark } from './XMark';

import './TicTacToe.scss';
import { AllGameBoardMarks, GamePosition } from '../../util/tictactoe/Board';

export const TicTacToe: React.FunctionComponent = () => {
  const [game, setGame] = useState(new TicTacToeGame());
  const [moveCounter, setMoveCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleChoosePosition = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const pos: GamePosition | undefined = event.currentTarget.getAttribute('data-position')?.split(',').map(s => parseInt(s, 10)) as GamePosition | undefined;
    if (pos && !game.board[pos[0]][pos[1]] && !game.gameOver) {
      game.makeMove(pos);
      setMoveCounter(moveCounter + 1);
      if (game.gameOver) {
        setTimeout(() => {
          setGameOver(true);
        }, 3000);
      }
    }
  }

  const resetGame = () => {
    setGame(new TicTacToeGame());
    setMoveCounter(0);
    setGameOver(false);
  }

  const renderMark = (mark: AllGameBoardMarks) => {
    if (mark === 'x') {
      return <XMark className="ttt-mark--x" />;
    } else if (mark === 'o') {
      return <OMark className="ttt-mark--o" />;
    }
  }

  const renderBoardBlocks = () => {
    const blocks = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        blocks.push(
          <div
            data-position={[i, j]}
            onClick={handleChoosePosition}
            className={classNames(
              'ttt-block',
              {
                'ttt-block--selectable': !game.board[i][j] && !game.gameOver,
              },
            )}
            key={`${i}|${j}`}
          >
            {renderMark(game.board[i][j])}
          </div>
        );
      }
    }
    return blocks;
  }

  const renderPlayAgainBtn = () => {
    return (
      <button className="ttt-board--btn" onClick={resetGame}>
        Play Again
      </button>
    );
  }

  const renderWinMessage = () => {
    const mark = game.winner().mark === 'x' ? <XMark /> : <OMark />;
    return (
      <section className="ttt-board--message">
        {mark} won!

        {renderPlayAgainBtn()}
      </section>
    );
  }

  const renderTieMessage = () => {
    return (
      <section className="ttt-board--message ttt-board--message-tie">
        Tie!

        {renderPlayAgainBtn()}
      </section>
    );
  }

  const renderGameMessage = () => {
    if (game.humanWon || game.computerWon) {
      return renderWinMessage();
    }
    return renderTieMessage();
  }

  const renderGame = () => {
    if (gameOver) {
      return renderGameMessage();
    }

    return renderBoardBlocks();
  }

  return (
    <div className="ttt">
      <HomeButton />

      <h1 className="ttt-title">
        Tic Tac Toe vs AI
      </h1>

      <h4 className="ttt-title--disclaimer">
        Don&#39;t feel bad if you lose. Don&#39;t waste your time trying to win either because you won&#39;t.
      </h4>

      <div className="ttt-board">
        <div className="ttt-board--wrapper">
          {renderGame()}
        </div>
      </div>

      <section className="ttt-description">
        <p className="ttt-description--body">
          The computer uses the minimax algorithm to decide on the best move to
          make.
        </p>

        <a
          className="ttt-link ttt-description--body"
          href="//github.com/AaronCCWong/portfolio/blob/master/src/util/tictactoe/ComputerPlayer.js#L15"
        >
          Click here to check out the implementation
        </a>.
      </section>
    </div>
  );
}
