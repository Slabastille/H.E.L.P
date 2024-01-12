import React from 'react';

const CreateIssueV2 = () => (
  <div className="container">
    <div className="hovering-form">
      <h1>Create Issue</h1>
      <form>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder='Enter the Full Name of the User'/>
        <label htmlFor="NPI">NPI Number:</label>
        <input type="text" id="NPI" name="NPI" placeholder='Enter the Clinicians NPI Number' />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder='Enter the Phone Number of the User' />

        {/* Dropdown menu for ticket type */}
        <label htmlFor="ticketType">Ticket Type:</label>
        <select id="ticketType" name="ticketType" defaultValue="selectTicketType">
          <option value="selectTicketType" disabled>Select Ticket Type</option>
          <option value="serviceRequest">Service Request</option>
          <option value="incident">Incident</option>
        </select>

        <button type="submit" style={{ marginTop: '20px'}}>Next</button>
      </form>
    </div>
  </div>
);

export default CreateIssueV2;


