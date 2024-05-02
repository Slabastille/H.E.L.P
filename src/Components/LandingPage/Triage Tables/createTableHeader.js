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
        <div>
        Key
        </div>
      </th>
      <th style={{ width: '42%' }} onClick={() => handleSort('fields.summary', setSortConfig)}>
        <div>
        Summary
        </div>
      </th>
      <th style={{ width: '20%' }} onClick={() => handleSort('fields.reporter.name', setSortConfig)}>
        <div>
        Reporter
        </div>
      </th>
      <th style={{ width: '14%' }} onClick={() => handleSort('fields.status.name', setSortConfig)}>
        <div>
        Status
        </div>
      </th>
      <th style={{ width: '7%' }} onClick={() => handleSort('fields.created', setSortConfig)}>
        <div>
        Created
        </div>
      </th>
      <th style={{ width: '7%' }} onClick={() => handleSort('fields.updated', setSortConfig)}>
        <div>
        Updated
        </div>
      </th>
    </tr>
  );
};

export default createTableHeader;
