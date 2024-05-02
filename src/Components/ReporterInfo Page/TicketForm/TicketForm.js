import React, { useEffect, useState } from 'react';
import HelpContext from '../../../context/HelpContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommentSection from './CommentSection';
import extractDate from '../../Ticket Tables/extractDate';
import extractTime from '../../Ticket Tables/extractTime';
import CommentsPage from './CommentsPage';

import loadingGif from '../../../../public/img/loading.gif';

const TicketForm = () => {
  const history = useHistory();
  //Current Page within the TicketForm Container
  const [currentPage, setCurrentPage] = useState(1);
  const { reporter } = useContext(HelpContext);

  //Variables for the api body
  const [summary, setSummary] = useState('');
  const { issueType, setIssueType } = useContext(HelpContext);
  const [description, setDescription] = useState('');
  const { issueSupplies, setIssueSupplies } = useContext(HelpContext);
  const [verifiedAssets, setVerifiedAssets] = useState('');
  const [supplies, setSupplies] = useState([]);
  const [address, setAddress] = useState('');
  const { comments, setComments } = useContext(HelpContext);
  const { loggedInUser } = useContext(HelpContext);
  const [loading, setLoading] = useState(false);
  const { currentRequest, setCurrentRequest } = useContext(HelpContext);
  const { linkedRequests, setLinkedRequests } = useContext(HelpContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (issueSupplies === false) {
        const response = await axios.post('http://localhost:3001/createJiraIssue', {
          projectName: 'TI',
          summary: summary,
          description: description,
          issueType: issueType,
        });
        setCurrentRequest({ id: response.data.id, key: response.data.key, status: 'Waiting for Support' });
        console.log('Jira issue created:', response);
        //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
      }
      setCurrentPage(2);
      setLoading(false);
    } catch (error) {
      console.log('Failed to create Jira issue');
    }
  };
  const handleSubmit2 = (a) => (e) => {
    e.preventDefault();
    console.log('Going to page ' + a);
    setCurrentRequest({ id: '1799361', key: 'TI-241132', status: 'Waiting For Support' });
    setCurrentPage(a);

    //alert(`Ticket Submitted for Review`);
  };

  const changeFormValue = (setValue) => (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log('des below');
    console.log(description);
    console.log(summary);
    console.log(issueType);
  }, [issueType]);

  return (
    <div className="request-left">
      <div className="ticketFormPage">
        {!loading && currentPage === 1 && (
          <div className="currentTicketForm">
            <div className="ticketFormHeader">
              <h1>Create Issue</h1>
            </div>

            <form className="ticketForm">
              <div className="ticketFormItemsContainer">
                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Summary</div>
                  <input className="ticketFormSummary" type="text" name="name" value={summary} placeholder="Summary" onChange={changeFormValue(setSummary)} />
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Issue Type</div>
                  <select className="ticketFormRequestType" onChange={changeFormValue(setIssueType)} type="select">
                    <option>Choose an Issue Type</option>
                    <option value={'Service Request'}>Service Request</option>
                    <option value={'Task'}>Task</option>
                    {/* <option value={'Incident'}>Incident</option> */}
                  </select>
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Description</div>
                  <textarea className="ticketFormDescription" placeholder="Description" value={description} rows="6" onChange={changeFormValue(setDescription)} />
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Ordering Supplies?</div>
                  <select className="ticketFormRequestType" value={issueSupplies} onChange={changeFormValue(setIssueSupplies)} type="select">
                    {/* <option>Choose a Request Type</option> */}
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Address</div>
                  <textarea className="ticketFormAddress" placeholder="Provider address will auto populate here -> 1234 Street City State Zip" rows="6" onChange={changeFormValue(setAddress)} disabled={!issueSupplies} />
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Verified Existing Assets?</div>
                  <select className="ticketFormVerifyAssets" disabled={!issueSupplies}>
                    <option>Select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="ticketFormItems">
                  <div className="ticketFormItemIdentifier">Choose Your Supplies</div>
                  <select multiple size="6" className="ticketFormSupplies" disabled={!issueSupplies}>
                    <option value="American">Lightning to USB-A</option>
                    <option value="Andean">Lightning to USB-C</option>
                    <option value="Chilean">Car Charger</option>
                    <option value="Greater">Wall Charger</option>
                    <option value="James's">iPad Case/Keyboard</option>
                    <option value="Lesser">iPad Only</option>
                  </select>
                </div>
              </div>

              <div className="ticketFormButtonContainer">
                <div className="ticketFormSecondButton" onClick={() => history.push('/reporterInfo')}>
                  Cancel
                </div>

                <button onClick={handleSubmit2(2)} className="ticketFormButton">
                  {/* <button onClick={handleSubmit} className="ticketFormButton"> */}
                  Create Ticket
                </button>
              </div>
            </form>
          </div>
        )}

        {loading && (
          <div className="loading">
            <img className="loadingGif" src={loadingGif} alt="loading..." />
          </div>
        )}

        {!loading && currentPage === 2 && <CommentsPage />}
      </div>
    </div>
  );
};

export default TicketForm;
