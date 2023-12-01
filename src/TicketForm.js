import React, { useState } from 'react';
import HelpContext from './context/HelpContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const TicketForm = () => {
  const history = useHistory();
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const { summary, setSummary } = useContext(HelpContext);
  const { requestType } = useContext(HelpContext);
  const { description, setDescription } = useContext(HelpContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/createJiraIssue',
        {
          summary: summary,
          description: description,
        }
      );

      console.log('Jira issue created:', response.data);
      //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
    } catch (error) {
      console.error('Error creating Jira issue:', error);
    }
  };

  //Addedd ^^^^^^^

  const summaryChange = (event) => {
    setSummary(event.target.value);
  };
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="ticketFormPage">
      <form className="ticketForm" action="/">
        <h1 className="formHeader">Enter Ticket Information</h1>

        <div className="formBody">
          <input
            className="summary"
            type="text"
            name="name"
            value={summary}
            placeholder="Summary"
            onChange={summaryChange}
          />

          <div>
            <textarea
              className="description"
              placeholder="Description"
              value={description}
              rows="6"
              onChange={descriptionChange}
            ></textarea>
          </div>
        </div>

        <button className="TicketFormBtn" type="submit" onClick={handleSubmit}>
          Next
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
