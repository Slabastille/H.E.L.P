import React from 'react';
import AssignedMs from './AssignedMs';

class AssignedToMe extends React.Component {
  render() {
    return (
      <div>
        <div className="assignedToMeContainer">
          <div>ASSIGNED TO ME</div>
          <AssignedMs />
        </div>
      </div>
    );
  }
}

export default AssignedToMe;
