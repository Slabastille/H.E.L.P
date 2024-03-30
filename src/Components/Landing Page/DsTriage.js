import axios from 'axios';
import React, { useState, useEffect, useContext, useRef } from 'react';
import HelpContext from '../../context/HelpContext';
import tableSorter from '../Ticket Tables/TableSorter/tableSorter';
import createTableRows from './Triage Tables/createTableRows';

const DstTriage = () => {
  const [loading, setLoading] = useState(true);
  const { dsTriage, setDsTriage } = useContext(HelpContext);
  const [sortConfigDs, setSortConfigDs] = useState({
    key: 'key',
    direction: 'ascending',
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const retrieveIssues = async () => {
    setLoading(true);
    try {
      
      const response = await axios.post('http://localhost:3001/findTickets', {
      jql: "status in (Created, 'In Progress', Reopened, 'Waiting for Customer', 'Waiting For Support', Open, 'Waiting for approval') AND assignee is EMPTY AND (labels is EMPTY OR labels != ServiceDesk)",
      });
      if (isMounted.current) {
        setDsTriage(response.data);
      }
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await retrieveIssues();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      let sortedDsTriage = tableSorter([...dsTriage], sortConfigDs.key, sortConfigDs.direction);
      console.log(sortConfigDs.key);
      setDsTriage(sortedDsTriage);
    }
  }, [sortConfigDs]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfigDs.key === key && sortConfigDs.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfigDs({ key, direction });
  };

  if (loading == true) {
    return (
      <div className="loading">
        <img className="loadingGif" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="X" />
        <div>Loading...</div>
      </div>
    );
  }
  return (
    <div className="triage-container">
      <div className="triage-ticket-table-title">
        <h1>DS Triage</h1>
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
              <th style={{ width: '8%' }} onClick={() => console.log('HELLOOOO')}>
                Key
              </th>
              <th style={{ width: '42%' }} onClick={() => handleSort('fields.summary')}>
                Summary
              </th>
              <th style={{ width: '20%' }} onClick={() => handleSort('fields.reporter.emailAddress')}>
                Reporter
              </th>
              <th style={{ width: '14%' }} onClick={() => handleSort('fields.status.name')}>
                Status
              </th>
              <th style={{ width: '7%' }} onClick={() => handleSort('fields.created')}>
                Created
              </th>
              <th style={{ width: '7%' }} onClick={() => handleSort('fields.updated')}>
                Updated
              </th>
            </tr>
          </thead>

          <tbody className="triage-ticket-table-body">{createTableRows(dsTriage)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DstTriage;
