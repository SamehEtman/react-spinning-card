import React from 'react';
import './SpinningCard.scss';

const SpinningCard = (props) => {
  const { FrontComponent, BackComponent, width, height } = props;
  return (
    <div className="card" style={{ width, height }}>
      <div className="card__side card__side--front">{FrontComponent}</div>
      <div className="card__side card__side--back">{BackComponent}</div>
    </div>
  );
};

export default SpinningCard;
