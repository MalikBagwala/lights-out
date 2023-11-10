import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board cols={5} rows={5} />
      </header>
    </div>
  );
}

export default App;
