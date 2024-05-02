import React, { useEffect, useContext, useState } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedIssuesRows from './CreateAssignedIssuesRows';
import tableSorter from '../../Ticket Tables/TableSorter/tableSorter';
import handleSort from '../../Ticket Tables/handleSort';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';

const AllAssignedIssues = () => {
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
    let sortedassignedIssues = tableSorter([...assignedIssues], sortConfigAllAssigned.key, sortConfigAllAssigned.direction);
    setAssignedIssues(sortedassignedIssues);
  }, [sortConfigAllAssigned]);

  return (
    <table className="assignedToMeTable">
      <thead className="assignedHeadersContainer">
        <tr>
          <th>
            <input type="checkbox" disabled={true} />
          </th>
          <th>
            <div>
              <div className="triage-ticket-table-headerItems" onClick={() => handleSort('key', setSortConfigAllAssigned)}>
                <div> Key </div>
                <div>
                  {sortConfigAllAssigned.key === 'key' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                  {sortConfigAllAssigned.key === 'key' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
                </div>
              </div>
            </div>
          </th>
          <th>
            <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.summary', setSortConfigAllAssigned)}>
              <div> Summary </div>
              <div>
                {sortConfigAllAssigned.key === 'fields.summary' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                {sortConfigAllAssigned.key === 'fields.summary' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
              </div>
            </div>
          </th>
          <th>
            <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.reporter.name', setSortConfigAllAssigned)}>
              <div> Reporter </div>
              <div>
                {sortConfigAllAssigned.key === 'fields.reporter.name' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                {sortConfigAllAssigned.key === 'fields.reporter.name' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
              </div>
            </div>
          </th>
          <th>
            <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.status.name', setSortConfigAllAssigned)}>
              <div> Status </div>
              <div>
                {sortConfigAllAssigned.key === 'fields.status.name' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                {sortConfigAllAssigned.key === 'fields.status.name' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
              </div>
            </div>
          </th>
          <th>
            <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.created', setSortConfigAllAssigned)}>
              <div> Created </div>
              <div>
                {sortConfigAllAssigned.key === 'fields.created' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                {sortConfigAllAssigned.key === 'fields.created' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
              </div>
            </div>
          </th>
          <th>
            <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.updated', setSortConfigAllAssigned)}>
              <div> Updated </div>
              <div>
                {sortConfigAllAssigned.key === 'fields.updated' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                {sortConfigAllAssigned.key === 'fields.updated' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />}
              </div>
            </div>
          </th>
        </tr>
      </thead>

      <tbody className="assignedBody">
        {assignedIssues.map((value) => (
          <tr key={value.key}>
            <td>
              <a>
                <input type="checkbox" disabled={true} />
              </a>
            </td>
            <td>
              <a href={'https://jira.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer">
                {value.key}
              </a>
            </td>
            <td>{value.fields.summary}</td>
            <td>{value.fields.reporter.emailAddress}</td>
            <td>{value.fields.status.name}</td>
            <td>{extractDate(value.fields.created)}</td>
            <td>{extractDate(value.fields.updated)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllAssignedIssues;
