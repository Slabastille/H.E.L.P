import React, { useEffect, useContext, useState } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedIssuesRows from './CreateAssignedIssuesRows';
import tableSorter from '../../Ticket Tables/TableSorter/tableSorter';
// import handleSort from '../../Ticket Tables/handleSort';

const AllAssignedIssues = () => {
  const handleSort2 = (key) => {
    setSortConfigAllAssigned((prevState) => {
      let direction = 'ascending';
      if (prevState.key === key && prevState.direction === 'ascending') {
        direction = 'descending';
      }
      return { key, direction };
    });
  };
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);
  const [sortConfigAllAssigned, setSortConfigAllAssigned] = useState({
    key: 'key',
    direction: 'ascending',
  });
  useEffect(() => {
    console.log('assignedIssues');
    console.log(assignedIssues);
    console.log(assignedIssues.length);
  }, [assignedIssues]);

  useEffect(() => {
    let sortedassignedIssues = tableSorter(
      [...assignedIssues],
      sortConfigAllAssigned.key,
      sortConfigAllAssigned.direction
    );
    setAssignedIssues(sortedassignedIssues);
  }, [sortConfigAllAssigned]);
  return (
    <div className="assignedContainer">
      <table className="allAssignedIssuesTable">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th onClick={() => handleSort2('key', setSortConfigAllAssigned)}>Key</th>
            <th onClick={() => handleSort2('fields.summary', setSortConfigAllAssigned)}>Summary</th>
            <th onClick={() => handleSort2('fields.reporter.name', setSortConfigAllAssigned)}>Reporter</th>
            <th onClick={() => handleSort2('fields.status.name', setSortConfigAllAssigned)}>Status</th>
            <th onClick={() => handleSort2('fields.created', setSortConfigAllAssigned)}>Created</th>
            <th onClick={() => handleSort2('fields.updated', setSortConfigAllAssigned)}>Updated</th>
          </tr>
        </thead>

        <tbody>{createAssignedIssuesRows(assignedIssues)}</tbody>
      </table>
    </div>
  );
};

export default AllAssignedIssues;
