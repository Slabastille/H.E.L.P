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
      <table >
        <thead className='assignedHeaders'>
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

        <tbody className='assignedBody'>{createAssignedSupplyRows(assignedSupplyIssues)}</tbody>
      </table>
  );
};

export default AssignedSupplyIssues;
