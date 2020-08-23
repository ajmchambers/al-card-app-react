import React from 'react';
import './App.css';

import { AlCard } from '@ajmchambers/al-card-react';

function App() {
  return (
    <div className="App">
      <AlCard>
        <div className="card card--front" slot="front"></div>
        <div className="card card--back" slot="back">Cat</div>
      </AlCard>
    </div>
  );
}

export default App;
