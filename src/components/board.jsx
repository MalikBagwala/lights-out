import React, { Component } from 'react';
import { useTransition, animated } from 'react-spring';
import Cell from './cell';
import './board.css';
import Victory from './Victory';
import Failure from './Failure';
import Logo from './Logo';
class Board extends Component {
  state = {
    board: [],
    hasWon: false,
    hasLost: false,
    turns: 50
  };

  makeBoard = () => {
    const { cols, rows } = this.props;
    let board = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let i = 0; i < cols; i++) {
        row.push(false);
      }
      board.push(row);
    }
    this.setState({ board, hasWon: false, turns: 50, hasLost: false });
  };
  componentWillMount() {
    this.makeBoard();
  }

  playAgain = () => {
    this.makeBoard();
  };
  handleCellSelect = (row, col) => {
    const { rows, cols } = this.props;
    const { board, turns } = this.state;
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(row, col);
    flipCell(row, col - 1);
    flipCell(row, col + 1);
    flipCell(row - 1, col);
    flipCell(row + 1, col);
    const hasWon = board.every(r => r.every(c => c));
    this.setState({
      board,
      hasWon,
      turns: turns > 0 && turns - 1,
      hasLost: turns == 1
    });
  };
  render() {
    const { board, hasWon, turns, hasLost } = this.state;
    return (
      <>
        {hasLost ? (
          <Failure onClick={this.playAgain} />
        ) : hasWon ? (
          <Victory onClick={this.playAgain} />
        ) : (
          <div id="main">
            <h1 className="app-title">Lights {<Logo />} Out</h1>
            <h3>
              {turns} <span className="text-muted">TURNS</span>
            </h3>
            <table className="board">
              <tbody>
                {board.map((row, rowID) => (
                  <tr key={rowID}>
                    {row.map((col, colID) => (
                      <Cell
                        key={`${rowID}-${colID}`}
                        row={rowID}
                        col={colID}
                        isActive={col}
                        onClick={this.handleCellSelect}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
}

export default Board;
