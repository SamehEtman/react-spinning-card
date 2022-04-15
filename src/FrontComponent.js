import React from 'react';
import './FrontComponent.scss';

const FrontComponent = () => {
  return (
    <div style={{ backgroundColor: 'rgb(48, 48, 48)' }}>
      <div style={{ position: 'relative' }}>
        <img
          class="image"
          alt="EagleRider Motorcycle Rentals and Tours"
          src="https://d2957ard4gss1s.cloudfront.net/languages/1/cover_images/xlarge_w/eaglerider_cover_image.jpg?1627574865"
        />
        <div className="tour_name">Route 66</div>
      </div>
      <div style={{ padding: '10px' }}>
        <ul>
          <li className="pickList tourPickList">
            <span className="fromToLine" />
            <p className="title">Tour Start</p>
            <p className="pickDropItem">
              10/11/1998 10:00 pm <br />
              Chicago <br />
              5490 Park Place, Rosemont, IL 60018, United States
            </p>
          </li>
          <li className="pickList tourPickList">
            <p className="title">Tour End</p>
            <p className="pickDropItem">
              10/11/1998 10:00 pm
              <br />
              Chicago
              <br />
              5490 Park Place, Rosemont, IL 60018, United States
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrontComponent;
