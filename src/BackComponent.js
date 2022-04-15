import React from 'react';
import './BackComponent.scss';

const BackComponent = () => {
  return (
    <div className="back_container">
      <div className="demo_conatiner">
        <div className="text">Eagle Rider</div>
        <div className="text">$255</div>
        <a className="btn" href="#">
          View Tour
        </a>
      </div>
    </div>
  );
};

export default BackComponent;
