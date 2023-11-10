import React from "react";

type FailureProps = {
  onClick: () => void;
};

const Failure = ({ onClick }: FailureProps) => {
  return (
    <div>
      <h1 className="text-heading">
        You've <span className="text-danger">Lost</span> 👎
      </h1>
      <button className="btn rounded emoji" onClick={onClick}>
        👈 Play Again
      </button>
    </div>
  );
};

export default Failure;
