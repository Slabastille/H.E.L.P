import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import createTableRows from './createTableRows';
import tableSorter from './tableSorter';

const MsTriage = () => {
  const [loading, setLoading] = useState(false);
  const { msTriage, setMsTriage } = useContext(HelpContext);
  const [sortConfigMs, setSortConfigMs] = useState({
    key: 'key',
    direction: 'ascending',
  });

  const retrieveIssues = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        jql: "summary !~ 'WorkspaceOne iPad Transition' AND status in (Created, 'In Progress', Reopened, 'Waiting for Customer', 'Waiting For Support', Open, 'Waiting for approval', 'In Development') AND labels in (ServiceDesk, TheLastMile) AND assignee in (EMPTY)",
      });
      setMsTriage(response.data);
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
    // console.log('MsTriage');
    // console.log(msTriage);
    //console.log(msTriage.length);
  }, [msTriage]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfigMs.key === key && sortConfigMs.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigMs({ key, direction });
  };

  useEffect(() => {
    let sortedMsTriage = tableSorter(
      [...msTriage],
      sortConfigMs.key,
      sortConfigMs.direction
    );
    console.log(sortConfigMs.key);
    setMsTriage(sortedMsTriage);
  }, [sortConfigMs]);

  if (loading) {
    return (
      <div className="loading">
        <img
          className="loadingGif"
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt="X "
        />
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="triage-container">
      <div className="triage-ticket-table-title">
        <h1>MS Triage</h1>
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
            {createTableRows(msTriage)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MsTriage;
