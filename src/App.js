import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';

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
