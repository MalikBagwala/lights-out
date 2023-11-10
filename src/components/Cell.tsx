import React from "react";

type CellProps = {
  onClick: (row: number, col: number) => void;
  row: number;
  col: number;
  isActive: boolean;
};

const Cell: React.FC<CellProps> = ({ onClick, row, col, isActive }) => {
  return (
    <td
      className={isActive ? "grid-cell active" : "grid-cell"}
      onClick={() => onClick(row, col)}
    />
  );
};

export default Cell;
