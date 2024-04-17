import React, { useContext, useEffect } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedSlaRows from './CreateAssignedSlaRows';

const AllAssignedSLA = () => {
  const { assignedIssues } = useContext(HelpContext);

  return (
      <table>
        <thead className='assignedHeaders'>
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

        <tbody className='assignedBody'>{createAssignedSlaRows(assignedIssues)}</tbody>
      </table>
  );
};

export default AllAssignedSLA;
