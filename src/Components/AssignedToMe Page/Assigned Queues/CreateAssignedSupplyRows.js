import React from 'react';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';
const createAssignedSupplyRows = (arr) => {
  return arr.map((value) => (
    <tr key={value.key}>
      <th>
        <a>
          <input type="button" onClick={() => alert('Hello World!')} value="Fulfill" />
        </a>
      </th>
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
  ));
};
export default createAssignedSupplyRows;
