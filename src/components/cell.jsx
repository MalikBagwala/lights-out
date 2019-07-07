import React from 'react';
const Cell = ({ onClick, row, col, isActive }) => {
  return (
    <td
      className={isActive ? 'grid-cell active' : 'grid-cell'}
      onClick={() => onClick(row, col)}
    />
  );
};

export default Cell;
