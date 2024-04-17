import React from 'react';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';

const createTableRows = (arr) => {
  return arr.map((value) => (
    <tr key={value.key}>
      <td style={{ width: '2%' }}>
        <a>
          <input type="checkbox" checked={isAllChecked} onChange={handleHeaderCheckboxClick} />
        </a>
      </td>
      <td style={{ width: '8%' }}>
        <a href={'https://jira.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer">
          {value.key}
        </a>
      </td>
      <td
        style={{
          width: '40%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {value.fields.summary}
      </td>
      <td style={{ width: '20%' }}>{value.fields.reporter.emailAddress}</td>
      <td
        id="summary"
        style={{
          width: '14%',
        }}
      >
        Waiting For Customer
      </td>
      <td style={{ width: '8%' }}>{extractDate(value.fields.created)}</td>
      <td style={{ width: '8%' }}>{extractDate(value.fields.updated)}</td>
    </tr>
  ));
};

export default createTableRows;
