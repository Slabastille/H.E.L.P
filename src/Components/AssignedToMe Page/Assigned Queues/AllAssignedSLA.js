import React, { useContext, useEffect } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedSlaRows from './CreateAssignedSlaRows';

const AllAssignedSLA = () => {
  const { assignedIssues } = useContext(HelpContext);

  return (
    <div className="full-ticket-table">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Key</th>
            <th>Summary</th>
            <th>Reporter</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
          </tr>
        </thead>

        <tbody>{createAssignedSlaRows(assignedIssues)}</tbody>
      </table>
    </div>
  );
};

export default AllAssignedSLA;
