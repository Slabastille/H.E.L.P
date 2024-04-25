import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';
import extractDate from '../Ticket Tables/extractDate';
import handleSort from '../Ticket Tables/handleSort';
import tableSorter from '../Ticket Tables/TableSorter/tableSorter';

const ReporterPastTickets = () => {
  const [loading, setLoading] = useState(false);
  const { reporter, setReporter } = useContext(HelpContext);
  const { reporterPastIssues, setReporterPastIssues } = useContext(HelpContext);
  const { linkedRequests, setLinkedRequests } = useContext(HelpContext);
  const [clickedButtons, setClickedButtons] = useState({});
  const [sortConfigReporter, setSortConfigReporter] = useState({
    key: '',
    direction: '',
  });

  const toggleLinkedRequest = (key) => {
    setClickedButtons((prev) => ({ ...prev, [key]: !prev[key] }));
    setLinkedRequests((prevLinkedRequests) => {
      if (prevLinkedRequests.includes(key)) {
        return prevLinkedRequests.filter((requestKey) => requestKey !== key);
      } else {
        return [...prevLinkedRequests, key];
      }
    });
  };

  const retrieveIssues = async () => {
    //e.preventDefault();
    const reporterEmail = reporter.email;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        //jql: `reporter = '${reporterEmail}' AND project = 'Desktop Support' AND status not in (Canceled, Closed, Done, Resolved, 'Task Complete', 'Task Verified (Accepted)')`,
        jql: `reporter = '${reporterEmail}' AND project = 'Desktop Support'`,
      });
      setReporterPastIssues(response.data);
      setReporter({ name: '', email: '', npi: '' });
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
    console.log('linked requests below');
    console.log(linkedRequests);
  }, [linkedRequests]);

  useEffect(() => {
    let sortedIssues = tableSorter([...reporterPastIssues], sortConfigReporter.key, sortConfigReporter.direction);
    console.log(sortConfigReporter.key);
    setReporterPastIssues(sortedIssues);
  }, [sortConfigReporter]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="reporter-pastTickets">
      <div className="reporter-pastTickets-Title">
        <div>Reporter Past Tickets</div>
        <div>{reporterPastIssues.length}</div>
      </div>

      <div className="full-ticket-table-container">
        <table className="full-ticket-table">
          <thead className="full-ticket-table-header">
            <tr>
              <th style={{ width: '4%' }}>Link</th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('key', setSortConfigReporter)}>
                  <div> Key </div>
                  <div>
                    {sortConfigReporter.key === 'key' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'key' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '32%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.summary', setSortConfigReporter)}>
                  <div> Summary </div>
                  <div>
                    {sortConfigReporter.key === 'fields.summary' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'fields.summary' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '20%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.reporter.name', setSortConfigReporter)}>
                  <div>Reporter</div>
                  <div>
                    {sortConfigReporter.key === 'fields.reporter.name' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'fields.reporter.name' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '14%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.status.name', setSortConfigReporter)}>
                  <div> Status </div>
                  <div>
                    {sortConfigReporter.key === 'fields.status.name' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'fields.status.name' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.created', setSortConfigReporter)}>
                  <div> Created </div>
                  <div>
                    {sortConfigReporter.key === 'fields.created' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'fields.created' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
              <th style={{ width: '8%' }}>
                <div className="triage-ticket-table-headerItems" onClick={() => handleSort('fields.updated', setSortConfigReporter)}>
                  <div> Updated </div>
                  <div>
                    {sortConfigReporter.key === 'fields.updated' && sortConfigReporter.direction === 'ascending' && <img className="triage-ticket-table-headerItemsImg" src="/img/upArrow.png" alt="^" />}
                    {sortConfigReporter.key === 'fields.updated' && sortConfigReporter.direction === 'descending' && <img className="triage-ticket-table-headerItemsImg" src="/img/downArrow.png" alt="^" />}
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="full-ticket-table-body">
            {reporterPastIssues.map((value) => {
              // const isClicked = clickedButtons[value.key];
              return (
                <tr key={value.key}>
                  <td style={{ width: '4%' }}>
                    <button
                      className={clickedButtons[value.key] ? 'clicked' : 'notClicked'}
                      onClick={() => {
                        toggleLinkedRequest(value.key);
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td style={{ width: '8%' }}>
                    <a href={'https://jira.dev.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer">
                      {value.key}
                    </a>
                  </td>
                  <td style={{ width: '32%' }}>{value.fields.summary}</td>
                  <td style={{ width: '20%' }}>{value.fields.reporter.emailAddress}</td>
                  <td style={{ width: '14%' }}>{value.fields.status.name}</td>
                  <td style={{ width: '8%' }}>{extractDate(value.fields.created)}</td>
                  <td style={{ width: '8%' }}>{extractDate(value.fields.updated)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReporterPastTickets;
