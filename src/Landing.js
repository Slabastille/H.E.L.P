import React from 'react';
import AssignedMs from './AssignedMs';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landingContainer">
        <div className="landingLeft">
          <h1>Assigned to Me</h1>
          <div>
            <AssignedMs />
          </div>
        </div>
        <div className="landingRight">Box2</div>
      </div>
    </div>
  );
};

export default Landing;
