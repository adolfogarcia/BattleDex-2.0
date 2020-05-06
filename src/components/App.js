import React from 'react';
import '../App.css';
import RingLoader from 'react-spinners/RingLoader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RingLoader
        size='150'
        color='#FF0000'
        />
        <p>
          &nbsp;&nbsp; Loading BattleDex...
        </p>
      </header>
    </div>
  );
}

export default App;
