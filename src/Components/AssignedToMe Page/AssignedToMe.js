import React from 'react';
import AssignedMs from './AssignedMs';
import { Link } from 'react-router-dom';

class AssignedToMe extends React.Component {
  render() {
    return (
      <div>
        <div className="assignedToMeContainer">
          <div>ASSIGNED TO MEEE</div>

          <AssignedMs />
        </div>
      </div>
    );
  }
}

export default AssignedToMe;
