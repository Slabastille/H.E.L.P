import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import tableSorter from '../Ticket Tables/TableSorter/tableSorter';
import handleSort from '../Ticket Tables/handleSort';
import extractDate from '../Ticket Tables/extractDate';
import extractTime from '../Ticket Tables/extractTime';

const DsTriage = () => {
  const [loading, setLoading] = useState(false);
  const [dsTriage, setDsTriage] = useState([]);
  const [sortConfigDs, setSortConfigDs] = useState({
    key: '',
    direction: '',
  });
  const [selected, setSelected] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleHeaderCheckboxClick = () => {
    setIsAllChecked(!isAllChecked);
    if (!isAllChecked) {
      setSelected(dsTriage.map((item) => item.key));
    } else {
      setSelected([]);
    }
  };
  const handleRowCheckboxClick = (key) => {
    if (selected.includes(key)) {
      setSelected(selected.filter((item) => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  const retrieveIssues = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        jql: "project = 'TI' AND status in (Created, 'In Progress', Reopened, 'Waiting for Customer', 'Waiting For Support', Open, 'Waiting for approval') AND assignee is EMPTY AND (labels is EMPTY OR labels != ServiceDesk)",
      });
      setDsTriage(response.data);
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('current selected: ');
    console.log(selected);
  }, [selected]);

  useEffect(() => {
    const fetchData = async () => {
      await retrieveIssues();
    };
    fetchData();
  }, []);

  useEffect(() => {
    // console.log('DsTriage');
    // console.log(dsTriage);
    // console.log(dsTriage.length);
  }, [dsTriage]);

  useEffect(() => {
    let sortedDsTriage = tableSorter([...dsTriage], sortConfigDs.key, sortConfigDs.direction);
    console.log(sortConfigDs.key);
    setDsTriage(sortedDsTriage);
  }, [sortConfigDs]);

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
        <div>DS Triage</div>
        <div>{dsTriage.length}</div>
      </div>
      <div className="triage-ticket-table-container">
        <table className="triage-ticket-table">
          <thead className="triage-ticket-table-header">
            <tr>
              <th style={{ width: '2%' }}>
                <div>
                  <div>
                    <input type="checkbox" checked={isAllChecked} onChange={handleHeaderCheckboxClick} />
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('key', setSortConfigDs)}>
                  <div> Key </div>
                  <div>
                    {sortConfigDs.key === 'key' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'key' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '40%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.summary', setSortConfigDs)}>
                  <div> Summary </div>
                  <div>
                    {sortConfigDs.key === 'fields.summary' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'fields.summary' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '20%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.reporter.name', setSortConfigDs)}>
                  <div>Reporter</div>
                  <div>
                    {sortConfigDs.key === 'fields.reporter.name' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'fields.reporter.name' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '14%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.status.name', setSortConfigDs)}>
                  <div> Status </div>
                  <div>
                    {sortConfigDs.key === 'fields.status.name' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'fields.status.name' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.created', setSortConfigDs)}>
                  <div> Created </div>
                  <div>
                    {sortConfigDs.key === 'fields.created' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'fields.created' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.updated', setSortConfigDs)}>
                  <div> Updated </div>
                  <div>
                    {sortConfigDs.key === 'fields.updated' && sortConfigDs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigDs.key === 'fields.updated' && sortConfigDs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="triage-ticket-table-body">
            {dsTriage.map((value) => (
              <tr key={value.key}>
                <td style={{ width: '2%' }}>
                  <a>
                    <input type="checkbox" checked={selected.includes(value.key)} onChange={() => handleRowCheckboxClick(value.key)} />
                  </a>
                </td>
                <td style={{ width: '8%' }}>
                  <a href={'https://jira.dev.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer">
                    {value.key}
                  </a>
                </td>
                <td style={{ width: '40%', overflow: 'hidden', textOverflow: 'ellipsis' }}>{value.fields.summary}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DsTriage;
