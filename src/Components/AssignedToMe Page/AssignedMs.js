import React, { useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import AllAssignedIssues from './Assigned Queues/AllAssignedIssues';
import AllAssignedSLA from './Assigned Queues/AllAssignedSLA';
import AssignedSupplyIssues from './Assigned Queues/AssignedSupplyIssues';

const AssignedMs = () => {
  const { currentAssignedTable, setCurrentAssignedTable } = useContext(HelpContext);

  return <div className="assignedToMeTableContainer">{currentAssignedTable === 1 ? <AllAssignedIssues /> : currentAssignedTable === 2 ? <AssignedSupplyIssues /> : currentAssignedTable === 3 ? <AllAssignedSLA /> : null}</div>;
};

export default AssignedMs;
