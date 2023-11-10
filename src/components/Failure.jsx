import React, { PureComponent } from 'react';

class Failure extends PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <h1 className="text-heading">
          You've <span className="text-danger">Lost</span> 👎
        </h1>
        <button className="btn rounded emoji" onClick={() => onClick()}>
          👈 Play Again
        </button>
      </div>
    );
  }
}

export default Failure;
