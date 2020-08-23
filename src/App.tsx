import React from 'react';
import './App.css';

import { AlCard } from '@ajmchambers/al-card-react';

function App() {
  return (
    <div className="App">
      <AlCard>
        <div slot="front">Front</div>
        <div slot="back">Back</div>
      </AlCard>
    </div>
  );
}

export default App;
