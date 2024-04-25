import React, { useContext, useEffect, useState } from 'react';
import HelpContext from '../../../context/HelpContext';
import createAssignedSupplyRows from './CreateAssignedSupplyRows';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';

const AssignedSupplyIssues = () => {
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);
  const { assignedSupplyIssues, setAssignedSupplyIssues } = useContext(HelpContext);
  const { loading, setLoading } = useState(false);

  if (loading) {
    return <div className="assignedToMe">Loading...</div>;
  }

  return (
    <table className="assignedToMeTable">
      <thead className="assignedHeadersContainer">
        <tr>
          <th>
            <div>
              <div className="triage-ticket-table-headerItems">
                <div> Fulfill </div>
                <div></div>
              </div>
            </div>
          </th>
          <th>
            <div>
              {/* onClick={() => handleSort('key', setSortConfigAllAssigned)} */}
              <div className="triage-ticket-table-headerItems">
                <div> Key </div>
                <div>
                  {/* {sortConfigAllAssigned.key === 'key' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                  {/* {sortConfigAllAssigned.key === 'key' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
                </div>
              </div>
            </div>
          </th>
          <th>
            {/* onClick={() => handleSort('fields.summary', setSortConfigAllAssigned)} */}
            <div className="triage-ticket-table-headerItems">
              <div> Summary </div>
              <div>
                {/* {sortConfigAllAssigned.key === 'fields.summary' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                {/* {sortConfigAllAssigned.key === 'fields.summary' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
              </div>
            </div>
          </th>
          <th>
            {/* onClick={() => handleSort('fields.reporter.name', setSortConfigAllAssigned)} */}
            <div className="triage-ticket-table-headerItems">
              <div> Reporter </div>
              <div>
                {/* {sortConfigAllAssigned.key === 'fields.reporter.name' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                {/* {sortConfigAllAssigned.key === 'fields.reporter.name' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
              </div>
            </div>
          </th>
          <th>
            {/* onClick={() => handleSort('fields.status.name', setSortConfigAllAssigned)} */}
            <div className="triage-ticket-table-headerItems">
              <div> Status </div>
              <div>
                {/* {sortConfigAllAssigned.key === 'fields.status.name' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                {/* {sortConfigAllAssigned.key === 'fields.status.name' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
              </div>
            </div>
          </th>
          <th>
            {/* onClick={() => handleSort('fields.created', setSortConfigAllAssigned)} */}
            <div className="triage-ticket-table-headerItems">
              <div> Created </div>
              <div>
                {/* {sortConfigAllAssigned.key === 'fields.created' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                {/* {sortConfigAllAssigned.key === 'fields.created' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
              </div>
            </div>
          </th>
          <th>
            {/* onClick={() => handleSort('fields.updated', setSortConfigAllAssigned)} */}
            <div className="triage-ticket-table-headerItems">
              <div> Updated </div>
              <div>
                {/* {sortConfigAllAssigned.key === 'fields.updated' && sortConfigAllAssigned.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />} */}
                {/* {sortConfigAllAssigned.key === 'fields.updated' && sortConfigAllAssigned.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="v" />} */}
              </div>
            </div>
          </th>
        </tr>
      </thead>

      <tbody className="assignedBody">
        {assignedSupplyIssues.map((value) => (
          <tr key={value.key}>
            <td>
              <a>
                <input type="button" onClick={() => alert('Hello World!')} value="Fulfill" />
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

export default AssignedSupplyIssues;
