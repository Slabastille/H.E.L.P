import React from 'react';
import AssignedMs from '../AssignedToMe Page/AssignedMs';
import LandingStats from './LandingStats';
import MsTriage from './MsTriage';
import DstTriage from './DstTriage';
import LandingHeader from './LandingHeader';

const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="landingTopSection">
        <div className="landingStatsContainer">
          <LandingHeader />
        </div>
      </div>

      <div className="landingBottomSection">
        <div className="landingBottomLeftSection">
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
