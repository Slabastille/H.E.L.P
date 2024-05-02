import React from 'react';
import AssignedMs from '../AssignedToMePage/AssignedMs';
import LandingStats from './LandingStats';
import MsTriage from './MsTriage';
import DsTriage from './DsTriage';
import LandingHeader from './LandingHeader';

const Landing = () => {
  return (
    <div className="pageContainer">
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
          <DsTriage />
        </div>
      </div>
    </div>
  );
};

export default Landing;
