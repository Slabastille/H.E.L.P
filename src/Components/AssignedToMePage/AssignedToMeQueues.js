import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';

function AssignedToMeQueues() {
  const { assignedIssues } = useContext(HelpContext);
  const { supplyAssignedIssues, setSupplyAssignedIssues } = useContext(HelpContext);
  const { slaAssignedIssues, setSlaAssignedIssues } = useContext(HelpContext);
  const { currentAssignedTable, setCurrentAssignedTable } = useContext(HelpContext);

  useEffect(() => {
    console.log(currentAssignedTable);
  }, [currentAssignedTable]);

  return (
    <div className="assignedToMeQueues">
      <div className="assignedToMeQueuesHeader"> Queues</div>
      <div className="assignedToMeQueuesBody">
        <div
          onClick={() => setCurrentAssignedTable(1)}
          className={`assignedToMeAllQueueTitles
          ${currentAssignedTable === 1 ? 'assignedToMeCurrentQueue' : ''}`}
        >
          <div className="assignedToMeAllQueueTitleHeaders">All Assigned</div>
          <div className="assignedQueueLength">{assignedIssues.length || 0}</div>
        </div>
        <div
          onClick={() => setCurrentAssignedTable(2)}
          className={`assignedToMeAllQueueTitles
          ${currentAssignedTable === 2 ? 'assignedToMeCurrentQueue' : ''}`}
        >
          <div className="assignedToMeAllQueueTitleHeaders">Assigned Supply</div>
          <div className="assignedQueueLength">{supplyAssignedIssues.length || 0}</div>
        </div>
        <div
          onClick={() => setCurrentAssignedTable(3)}
          className={`assignedToMeAllQueueTitles
          ${currentAssignedTable === 3 ? 'assignedToMeCurrentQueue' : ''}`}
        >
          <div className="assignedToMeAllQueueTitleHeaders">All Assigned SLA</div>
          <div className="assignedQueueLength">{slaAssignedIssues.length || 0}</div>
        </div>
      </div>
    </div>
  );
}

export default AssignedToMeQueues;
