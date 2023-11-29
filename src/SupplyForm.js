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

          <select multiple size="6">
            <option value="American">American flamingo</option>{' '}
            <option value="Andean">Andean flamingo</option>{' '}
            <option value="Chilean">Chilean flamingo</option>{' '}
            <option value="Greater">Greater flamingo</option>{' '}
            <option value="James's">James's flamingo</option>{' '}
            <option value="Lesser">Lesser flamingo</option>{' '}
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
