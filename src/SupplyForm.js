import React from 'react';
import HelpContext from './context/HelpContext';
import { useContext } from 'react';

const SupplyForm = () => {
  //   const { phoneNumber, setPhoneNumber } = useContext(HelpContext);
  return (
    <div className="ticketFormPage">
      <form className="ticketForm" action="/">
        <h1 className="formHeader">Supply request Form</h1>

        <div className="formBody">
          <input
            className="summary"
            type="text"
            name="name"
            placeholder="Summary"
          />
          <div>
            <textarea
              className="Adress"
              placeholder="Leave blank if using clinician default address"
              rows="6"
            ></textarea>
          </div>

          <select multiple size="6" className="selectRequestType">
            <option value="American">Lightning to USB-A</option>{' '}
            <option value="Andean">Lightning to USB-C</option>{' '}
            <option value="Chilean">Car Charger</option>{' '}
            <option value="Greater">Wall Charger</option>{' '}
            <option value="James's">iPad Case/Keyboard</option>{' '}
            <option value="Lesser">iPad Only</option>{' '}
          </select>
        </div>

        <button className="TicketFormBtn" type="submit" href="/">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SupplyForm;
