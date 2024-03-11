import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import createTableRows from './createTableRows';
import tableSorter from './tableSorter';

const DstTriage = () => {
  const [loading, setLoading] = useState(false);
  const { dsTriage, setDsTriage } = useContext(HelpContext);
  const [sortConfigDs, setSortConfigDs] = useState({
    key: 'key',
    direction: 'ascending',
  });

  const retrieveIssues = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        jql: "project = TI AND status in (Open, 'Waiting For Support') AND assignee in (EMPTY) ORDER BY summary DESC ",
      });
      setDsTriage(response.data);
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await retrieveIssues();
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('DsTriage');
    console.log(dsTriage);
    console.log(dsTriage.length);
  }, [dsTriage]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfigDs.key === key && sortConfigDs.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigDs({ key, direction });
  };

  useEffect(() => {
    let sortedDsTriage = tableSorter(
      [...dsTriage],
      sortConfigDs.key,
      sortConfigDs.direction
    );
    console.log(sortConfigDs.key);
    setDsTriage(sortedDsTriage);
  }, [sortConfigDs]);

  if (loading == true) {
    return (
      <div className="loading">
        <img
          className="loadingGif"
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt="X"
        />
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="triage-container">
      <div className="triage-ticket-table-title">
        <h1>DST Triage</h1>
      </div>

      <div className="triage-ticket-table">
        <table>
          <thead className="triage-ticket-table-header">
            <tr>
              <th style={{ width: '2%' }}>
                <a>
                  <input type="checkbox" />
                </a>
              </th>
              <th style={{ width: '8%' }} onClick={() => handleSort('key')}>
                Key
              </th>
              <th
                style={{ width: '42%' }}
                onClick={() => handleSort('fields.summary')}
              >
                Summary
              </th>
              <th
                style={{ width: '20%' }}
                onClick={() => handleSort('fields.reporter.emailAddress')}
              >
                Reporter
              </th>
              <th
                style={{ width: '14%' }}
                onClick={() => handleSort('fields.status.name')}
              >
                Status
              </th>
              <th
                style={{ width: '7%' }}
                onClick={() => handleSort('fields.created')}
              >
                Created
              </th>
              <th
                style={{ width: '7%' }}
                onClick={() => handleSort('fields.updated')}
              >
                Updated
              </th>
            </tr>
          </thead>

          <tbody className="triage-ticket-table-body">
            {createTableRows(dsTriage)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DstTriage;
