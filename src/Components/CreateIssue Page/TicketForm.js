import React, { useState } from 'react';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const TicketForm = () => {
  const history = useHistory();
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  const { summary, setSummary } = useContext(HelpContext);
  const { requestType, setRequestType } = useContext(HelpContext);
  const { description, setDescription } = useContext(HelpContext);
  const [showSupplyRequest, setShowSupplyRequest] = useState(false);

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

  const selectChange = (event) => {
    console.log(event.target.value);
    setRequestType(event.target.value);
    if (event.target.value === 'Supply Request') {
      setShowSupplyRequest(true);
    }
  };

  const summaryChange = (event) => {
    setSummary(event.target.value);
  };
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="ticketFormPage">
      <div className="formHeader">
        <h1>Enter Ticket Information</h1>
      </div>
      <form className="ticketForm" action="/">
        <div>
          <Link to="/landing">
            <h3>Summary</h3>
          </Link>
          <input
            className="summary"
            type="text"
            name="name"
            value={summary}
            placeholder="Summary"
            onChange={summaryChange}
          />
        </div>

        <div>
          <h3>Description</h3>
          <textarea
            className="description"
            placeholder="Description"
            value={description}
            rows="6"
            onChange={descriptionChange}
          ></textarea>
        </div>
        <div>
          <h3>Request Type</h3>
          <select
            className="selectRequestType"
            onChange={selectChange}
            type="select"
          >
            <option>Choose a Request Type</option>
            <option value={'Support Request'}>Support Request</option>
            <option value={'Supply Request'}>Supply Request</option>
          </select>
        </div>

        {showSupplyRequest && (
          <div>
            <div>
              <h3>Choose Your Supplies</h3>
              <select multiple size="6" className="selectRequestType">
                <option value="American">Lightning to USB-A</option>{' '}
                <option value="Andean">Lightning to USB-C</option>{' '}
                <option value="Chilean">Car Charger</option>{' '}
                <option value="Greater">Wall Charger</option>{' '}
                <option value="James's">iPad Case/Keyboard</option>{' '}
                <option value="Lesser">iPad Only</option>{' '}
              </select>
            </div>
            <div>
              <h3>Address</h3>
              <textarea
                className="Adress"
                placeholder="Leave blank if using clinician default address"
                rows="6"
              ></textarea>
            </div>
          </div>
        )}

        {/*This is for the button below onClick={handleSubmit} */}
        <button className="TicketFormBtn" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
