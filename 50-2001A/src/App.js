import React from 'react';

import './styles/pure.css' 
import './App.css';

import data from './data';

function App() {
  console.log('App init and load data: ', data);
  return (
    <div className="splash-container">
      <div className="splash">
          <h1 className="splash-head">50-2001</h1>
          <p className="splash-subhead">
            HTML Tables to React Components
          </p>
      </div>
  </div>

  );
}

export default App;
