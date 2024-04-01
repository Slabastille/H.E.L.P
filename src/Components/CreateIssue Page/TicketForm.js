import React, { useEffect, useState } from 'react';
import HelpContext from '../../context/HelpContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TicketForm = () => {
  const history = useHistory();
  //Current Page within the TicketForm Container
  const [currentPage, setCurrentPage] = useState(1);
  const { reporter } = useContext(HelpContext);

  //Variables for the api body
  const [ summary, setSummary ] = useState('');
  const [ description, setDescription ] = useState('');
  const { requestType, setRequestType } = useContext(HelpContext);
  const [verifiedAssets, setVerifiedAssets] = useState('');
  const [supplies, setSupplies] = useState([]);
  const [address, setAddress] = useState(''); 

  //Shows the supply request form if true
  const { showSupplyRequest, setShowSupplyRequest } = useContext(HelpContext);
  //Updates the showSupplyRequest state based on the request type
  useEffect(() => {
    if (requestType === 'Support Request') {
      setShowSupplyRequest(false)
    } else if (requestType === 'Supply Request') {
      setShowSupplyRequest(true);
    }}, [requestType]);


  
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
  const handleSubmit2 = (a) => (e) => {
    e.preventDefault();
    console.log("Going to page " + a)
    setCurrentPage(a)
    //alert(`Ticket Submitted for Review`);
  };

  const changeFormValue = (setValue) => (event) => {
    setValue(event.target.value);
  }



  useEffect(() => {
    console.log("des below")
    console.log(description)
  }, [description]);


  return (
    <div className="ticketContainer">
      <div className="ticketFormPage">
        
        {currentPage === 1 && ( 
        <div className='currentTicketForm'> 
          <div className="ticketFormHeader">
            <h1>Create Issue</h1>
          </div>

          <form className="ticketForm" action="/">
            <div className='ticketFormItemsContainer'>
              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Summary</div>
                <input
                  className="ticketFormSummary"
                  type="text"
                  name="name"
                  value={summary}
                  placeholder="Summary"
                  onChange={changeFormValue(setSummary)}
                />
              </div>

              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Description</div>
                <textarea
                  className="ticketFormDescription"
                  placeholder="Description"
                  value={description}
                  rows="6"
                  onChange={changeFormValue(setDescription)}
                />
              </div>

              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Request Type</div>
                <select className="ticketFormRequestType" onChange={changeFormValue(setRequestType)} type="select">
                  <option>Choose a Request Type</option>
                  <option value={'Support Request'}>Support Request</option>
                  <option value={'Supply Request'}>Supply Request</option>
                </select>
              </div>

              

              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Address</div>
                <textarea
                  className="ticketFormAddress"
                  placeholder="Provider address will auto populate here -> 1234 Street City State Zip"
                  rows="6"
                  onChange={changeFormValue(setAddress)}
                  disabled={!showSupplyRequest}
                />
              </div>

              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Verified Existing Assets?</div>
                <select className='ticketFormVerifyAssets'>
                  <option>Select...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className='ticketFormItems'>
                <div className='ticketFormItemIdentifier'>Choose Your Supplies</div>
                <select multiple size="6" className="ticketFormSupplies" disabled={!showSupplyRequest}>
                  <option value="American">Lightning to USB-A</option>
                  <option value="Andean">Lightning to USB-C</option>
                  <option value="Chilean">Car Charger</option>
                  <option value="Greater">Wall Charger</option>
                  <option value="James's">iPad Case/Keyboard</option>
                  <option value="Lesser">iPad Only</option>
                </select>
              </div>
              
            </div>

            <div className='ticketFormButtonContainer'>
                <button className='ticketFormSecondButton'>
                  Cancel
                </button>
                <button className="ticketFormButton" onClick={handleSubmit2(2)}>
                  Create Ticket
                </button>
            </div>
          </form>

        </div>)}


        {currentPage === 2 && ( 
        <div className='currentTicketForm'>
          <div className="ticketFormHeader">
            <h1>Comments</h1>
          </div>

          <form className="ticketForm" action="/">
            <div className='ticketFormCommentSection'>
              <div className='ticketAllComments'>
                <div className='comment'>
                Messages go here.
                </div>
                <div className='comment'>
                Messages go here.
                </div>
                <div className='comment'>
                Messages go here.
                </div>
                <div className='comment'>
                Messages go here.
                </div>
                <div className='comment'>
                Messages go here.
                </div>
              </div>
              <input
                className="ticketComment"
                type="text"
                name="name"
                // value={summary}
                // onChange={summaryChange}
              />
            </div>
    
            <div className='ticketFormButtonContainer'>
              
              <div className='ticketFormSecondButton'>
                Set Status
              </div>
              <div className="ticketFormButton" onClick={handleSubmit2(1)}>
                Resolve Issue
              </div>
            </div>              
          </form>

        </div>)}


      </div>
    </div>
  );
};

export default TicketForm;
