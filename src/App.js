import React from "react";
import SpinningCard from './SpinningCard';
import FrontComponent from './FrontComponent';
import BackComponent from './BackComponent';

import './App.scss'
const App = ()=> {

  return (
    <div className="page">
      <div className="container">
        <SpinningCard
          FrontComponent={<FrontComponent />}
          BackComponent={<BackComponent />}
          width="20rem"
          height="410px"
        />
      </div>
    </div>
  );
}

export default App;