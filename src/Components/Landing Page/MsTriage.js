import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import createTableRows from './Triage Tables/createTableRows';
import createTableHeader from './Triage Tables/createTableHeader';
import tableSorter from '../Ticket Tables/TableSorter/tableSorter';
import handleSort from '../Ticket Tables/handleSort';

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
    console.log('MsTriage');
    console.log(msTriage);
    console.log(msTriage.length);
  }, [msTriage]);

  useEffect(() => {
    let sortedMsTriage = tableSorter([...msTriage], sortConfigMs.key, sortConfigMs.direction);
    console.log(sortConfigMs.key);
    setMsTriage(sortedMsTriage);
  }, [sortConfigMs]);

  if (loading) {
    return (
      <div className="loading">
        <img className="loadingGif" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="X " />
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
          <thead className="triage-ticket-table-header">{createTableHeader(setSortConfigMs)}</thead>

          <tbody className="triage-ticket-table-body">{createTableRows(msTriage)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default MsTriage;
