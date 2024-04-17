import React, { useEffect } from 'react';
import AssignedMs from './AssignedMs';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';
import AssignedToMeQueues from './AssignedToMeQueues';
import axios from 'axios';

const AssignedToMe = () => {
  const { assignedIssues, setAssignedIssues } = useContext(HelpContext);
  const { setCurrentPage } = useContext(HelpContext);
  const retrieveIssues = async () => {
    try {
      const response = await axios.post('http://localhost:3001/findTickets', {
        jql: "assignee = 'slabastille@signifyhealth.com' AND resolution = Unresolved order by updated DESC",
      });
      setAssignedIssues(response.data);
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    }
  };

  //fetches all current assigned issues
  useEffect(() => {
    const fetchData = async () => {
      await retrieveIssues();
    };
    fetchData();
  }, []);
  //Print the current assigned issues
  useEffect(() => {
    console.log(assignedIssues);
  }, [assignedIssues]);
  //Set the current page to 2 (for the header)
  useEffect(() => {
    setCurrentPage(2);
  }, [setCurrentPage]);

  return (
    <div className="pageContainer" style={{ flexDirection: 'row' }}>
      <div className="assignedToMeLeftSection">
        <div className="assignedToMeQueuesContainer">
          <AssignedToMeQueues />
        </div>
      </div>
      <div className="assignedToMeRightSection">
        <div className="assignedToMeTableContainer">
          <AssignedMs />
        </div>
      </div>
    </div>
  );
};

export default AssignedToMe;
