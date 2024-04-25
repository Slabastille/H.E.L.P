import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HelpContext from '../../context/HelpContext';

function AssignedToMeQueues() {
  const { assignedIssues } = useContext(HelpContext);
  const { assignedSupplyIssues, setAssignedSupplyIssues } = useContext(HelpContext);
  const { currentAssignedTable, setCurrentAssignedTable } = useContext(HelpContext);

  //Sets the assignedSupplyIssues
  useEffect(() => {
    const supplyIssues = assignedSupplyIssues.filter((issue) => issue.fields.summary.startsWith('New Supply Request For:') === true);
    setAssignedSupplyIssues(supplyIssues);
  }, []);

  // useEffect(() => {
  //   console.log('Here are the assigned supply issues');
  //   console.log(assignedSupplyIssues);
  // }, []);

  // if (assignedSupplyIssues.length > 0) {
  //   //     history.push('/supplyPage');
  //   //   } else {
  //   //     alert('You have no supply requests assigned to you');
  // }

  // <div onClick={setSupplies}>Supply Request Page</div>

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
          <div className="assignedQueueLength">{assignedSupplyIssues.length || 0}</div>
        </div>
        <div
          onClick={() => setCurrentAssignedTable(3)}
          className={`assignedToMeAllQueueTitles
          ${currentAssignedTable === 3 ? 'assignedToMeCurrentQueue' : ''}`}
        >
          <div className="assignedToMeAllQueueTitleHeaders">All Assigned SLA</div>
          <div className="assignedQueueLength">{assignedIssues.length || 0}</div>
        </div>
      </div>
    </div>
  );
}

export default AssignedToMeQueues;
