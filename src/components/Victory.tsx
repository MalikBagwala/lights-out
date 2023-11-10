import React from "react";

type VictoryProps = {
  onClick: () => void;
};

const Victory = ({ onClick }: VictoryProps) => {
  return (
    <div>
      <h1 className="text-heading">
        You've <span className="text-success">Won</span> 👋
      </h1>
      <button className="btn rounded emoji" onClick={onClick}>
        👈 Play Again
      </button>
    </div>
  );
};

export default Victory;
