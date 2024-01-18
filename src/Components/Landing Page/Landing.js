import React from 'react';
import AssignedMs from '../AssignedToMe Page/AssignedMs';
import LandingStats from './LandingStats';
import MsTriage from './MsTriage';
import DstTriage from './DstTriage';

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="landingTopSection">
        <div className="landingStatsContainer">
          <h1>PLACEHOLDER</h1>
        </div>
      </div>
      <div className="landingMiddleSection">
        <div className="landingAssignedToMeContainer">
          <div>
            <h1>Assigned to Me</h1>
          </div>
        </div>
      </div>

      <div className="landingBottomSection">
        <div className="landingBottomLeftSection">
          {' '}
          <MsTriage />
        </div>
        <div className="landingBottomRightSection">
          <DstTriage />
        </div>
      </div>
    </div>
  );
};

export default Landing;
