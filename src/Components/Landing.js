import React from 'react';
import AssignedMs from './AssignedMs';
import ReporterPastTickets from './Request Page/ReporterPastTickets';

const Landing = () => {
  return (
    <div className="landing">
      <div className="assignedToMe">
        <h1>Assigned to Me</h1>
        <div className="landingFirst">
          <AssignedMs />
        </div>
      </div>

      <div className="landingSecond">Box2</div>
      {/* <ReporterPastTickets /> */}
    </div>
  );
};

export default Landing;
