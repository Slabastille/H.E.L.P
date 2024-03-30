import React from 'react';

const createTableHeader = (setSortConfig) => {
  // Your component logic goes here

  return (
    // JSX code for your component's UI goes here
    <tr>
      <th style={{ width: '2%' }}>
        <a>
          <input type="checkbox" />
        </a>
      </th>
      <th style={{ width: '8%' }} onClick={() => handleSort('key', setSortConfig)}>
        Key
      </th>
      <th style={{ width: '42%' }} onClick={() => handleSort('fields.summary', setSortConfig)}>
        Summary
      </th>
      <th style={{ width: '20%' }} onClick={() => handleSort('fields.reporter.name', setSortConfig)}>
        Reporter
      </th>
      <th style={{ width: '14%' }} onClick={() => handleSort('fields.status.name', setSortConfig)}>
        Status
      </th>
      <th style={{ width: '7%' }} onClick={() => handleSort('fields.created', setSortConfig)}>
        Created
      </th>
      <th style={{ width: '7%' }} onClick={() => handleSort('fields.updated', setSortConfig)}>
        Updated
      </th>
    </tr>
  );
};

export default createTableHeader;
