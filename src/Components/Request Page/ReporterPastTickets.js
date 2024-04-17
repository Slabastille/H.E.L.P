import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from '../../context/HelpContext';



const ReporterPastTickets = () => {
  const [loading, setLoading] = useState(false);
  const { reporter, setReporter } = useContext(HelpContext);
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);
  const {linkedRequests , setLinkedRequests} = useContext(HelpContext);
  const [clickedButtons, setClickedButtons] = useState({});


  const createTableRows = (arr) => {
    return arr.map((value) => {
      const isClicked = clickedButtons[value.key];
      return(
      <tr key={value.key}>
        <td>
          <button className={isClicked ? 'clicked' : ''} onClick={() => {
              const isNowClicked = toggleLinkedRequest(value.key);
              setClickedButtons(prev => ({ ...prev, [value.key]: isNowClicked }));
            }}> X </button>
        </td>
        <td>
          <a href={'https://jira.dev.signifyhealth.com/browse/' + value.key} target="_blank" rel="noopener noreferrer" > {value.key} </a>
        </td>
        <td>{value.fields.summary}</td>
        <td>{value.fields.reporter.emailAddress}</td>
        <td>{value.fields.status.name}</td>
        <td>{value.fields.created}</td>
        <td>{value.fields.updated}</td>
      </tr>)
  });
  };
  const toggleLinkedRequest = (key) => {
    let isInArray;
    setLinkedRequests(prevLinkedRequests => {
      if (prevLinkedRequests.includes(key)) {
        isInArray = false;
        return prevLinkedRequests.filter(requestKey => requestKey !== key);
      } else {
        isInArray = true;
        return [...prevLinkedRequests, key];
      }
    });
    return isInArray;
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
      setAssignedIssues(response.data);
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
    console.log(linkedRequests);
  }, [linkedRequests]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="reporter-pastTickets">
      <div className="request-bottom-right-header">
        <h1>Reporter Past Tickets</h1>
      </div>

      <div className="full-ticket-table">
        <table>
          <thead>
            <tr>
              <th>Link Request</th>
              <th>Key</th>
              <th>Summary</th>
              <th>Reporter</th>
              <th>Status</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>{createTableRows(assignedIssues)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ReporterPastTickets;
