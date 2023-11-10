import React, { useEffect, useState } from "react";
import "./board.css";
import Cell from "./Cell";
import Failure from "./Failure";
import Logo from "./Logo";
import Victory from "./Victory";

type BoardProps = {
  cols: number;
  rows: number;
};

const Board = ({ cols, rows }: BoardProps) => {
  const [board, setBoard] = useState<boolean[][]>([]);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [turns, setTurns] = useState(50);

  const makeBoard = () => {
    let newBoard: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let i = 0; i < cols; i++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    setHasWon(false);
    setTurns(50);
    setHasLost(false);
  };

  useEffect(() => {
    makeBoard();
  }, []);

  const playAgain = () => {
    makeBoard();
  };

  const handleCellSelect = (row: number, col: number) => {
    const newBoard = structuredClone(board);
    function flipCell(y: number, x: number) {
      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }

    flipCell(row, col);
    flipCell(row, col - 1);
    flipCell(row, col + 1);
    flipCell(row - 1, col);
    flipCell(row + 1, col);

    const hasWon = newBoard.every((r: any) => r.every((c: any) => c));
    setHasWon(hasWon);
    setTurns((prevTurns) => (prevTurns > 0 ? prevTurns - 1 : prevTurns));
    setHasLost(turns === 1);
    setBoard(newBoard);
  };

  return (
    <>
      {hasLost ? (
        <Failure onClick={playAgain} />
      ) : hasWon ? (
        <Victory onClick={playAgain} />
      ) : (
        <div id="main">
          <h1 className="app-title">
            Lights <Logo /> Out
          </h1>
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
                      onClick={handleCellSelect}
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
};

export default Board;
