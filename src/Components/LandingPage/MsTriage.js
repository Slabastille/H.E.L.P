import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import tableSorter from '../Ticket Tables/TableSorter/tableSorter';
import handleSort from '../Ticket Tables/handleSort';
import extractDate from '../Ticket Tables/extractDate';
import extractTime from '../Ticket Tables/extractTime';
const MsTriage = () => {
  const [msTriage, setMsTriage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortConfigMs, setSortConfigMs] = useState({
    key: '',
    direction: '',
  });
  const [selected, setSelected] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleHeaderCheckboxClick = () => {
    setIsAllChecked(!isAllChecked);
    if (!isAllChecked) {
      setSelected(msTriage.map((item) => item.key));
    } else {
      setSelected([]);
    }
    // setSelected(...msTriage);
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
    // console.log('MsTriage');
    // console.log(msTriage);
    // console.log(msTriage.length);
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
        <div>MS Triage</div>
        <div>{msTriage.length}</div>
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
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('key', setSortConfigMs)}>
                  <div> Key </div>
                  <div>
                    {sortConfigMs.key === 'key' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'key' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '40%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.summary', setSortConfigMs)}>
                  <div> Summary </div>
                  <div>
                    {sortConfigMs.key === 'fields.summary' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'fields.summary' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '20%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.reporter.name', setSortConfigMs)}>
                  <div>Reporter</div>
                  <div>
                    {sortConfigMs.key === 'fields.reporter.name' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'fields.reporter.name' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '14%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.status.name', setSortConfigMs)}>
                  <div> Status </div>
                  <div>
                    {sortConfigMs.key === 'fields.status.name' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'fields.status.name' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.created', setSortConfigMs)}>
                  <div> Created </div>
                  <div>
                    {sortConfigMs.key === 'fields.created' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'fields.created' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.updated', setSortConfigMs)}>
                  <div> Updated </div>
                  <div>
                    {sortConfigMs.key === 'fields.updated' && sortConfigMs.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigMs.key === 'fields.updated' && sortConfigMs.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="triage-ticket-table-body">
            {msTriage.map((value) => (
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

export default MsTriage;
