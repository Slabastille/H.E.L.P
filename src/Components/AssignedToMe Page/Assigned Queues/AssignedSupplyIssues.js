import React, { useContext, useEffect } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedSupplyRows from './CreateAssignedSupplyRows';
const AssignedSupplyIssues = () => {
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);
  const { assignedSupplyIssues, setAssignedSupplyIssues } = useContext(HelpContext);
  const { loading, setLoading } = useContext(HelpContext);

  if (loading) {
    return <div className="assignedToMe">Loading...</div>;
  }

  return (
    <div className="assignedContainer">
      <table className="assignedSupplyIssuesTable">
        <thead>
          <tr>
            <th>Fulfill</th>
            <th>Key</th>
            <th>Summary</th>
            <th>Reporter</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>{createAssignedSupplyRows(assignedSupplyIssues)}</tbody>
      </table>
    </div>
  );
};

export default AssignedSupplyIssues;
