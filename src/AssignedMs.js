import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import HelpContext from './context/HelpContext';

const createTableRows = (arr) => {
  return arr.map((value) => (
    <tr key={value.key}>
      <td>
        <a
          href={'https://jira.signifyhealth.com/browse/' + value.key}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.key}
        </a>
      </td>
      <td>{value.fields.summary}</td>
      <td>{value.fields.reporter.emailAddress}</td>
      <td>{value.fields.status.name}</td>
      <td>{value.fields.created}</td>
      <td>{value.fields.updated}</td>
    </tr>
  ));
};

const AssignedMs = () => {
  const [loading, setLoading] = useState(false);
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);

  const retrieveIssues = async () => {
    //e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/findAssigned');
      setAssignedIssues(response.data);
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
    console.log(assignedIssues);
  }, [assignedIssues]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
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
  );
};

export default AssignedMs;
