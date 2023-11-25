import React from 'react';
import HelpContext from './context/HelpContext';
import { useContext } from 'react';

const TicketForm = () => {
  const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  console.log('here is the phone number' + phoneNumber);
  return (
    <div className="ticketFormPage">
      <form className="ticketForm" action="/">
        <h1 className="formHeader">Enter Ticket Information</h1>

        <div className="formBody">
          <input
            className="summary"
            type="text"
            name="name"
            placeholder="Summary"
          />

          <select className="selectRequestType">
            {/* Will need an onchange here to change the selector color later */}
            <option> Choose a Request Type</option>
            <option>Support Request</option>
            <option>Supply Request</option>
          </select>

          <div>
            <textarea
              className="description"
              placeholder="Description"
              rows="6"
            ></textarea>
          </div>
        </div>

        <button className="TicketFormBtn" type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
