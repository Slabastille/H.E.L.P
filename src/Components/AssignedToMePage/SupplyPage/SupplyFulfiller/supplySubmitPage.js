import React from 'react';
import { useState, useEffect } from 'react';
import CommentSection from '../../../ReporterInfo Page/TicketForm/CommentSection';
import ProviderSupplies from '../ProviderSupplies';
import axios from 'axios';

const SupplySubmitPage = ({ currentSupplyIssue }) => {
  const [supplyLinkType, setSupplyLinkType] = useState('relates');
  const [resolvedServiceLevel, setResolvedServiceLevel] = useState('None');
  const [firstSelectorValue, setFirstSelectorValue] = useState('');
  const [secondSelectorOptions, setSecondSelectorOptions] = useState([]);

  // Your component logic goes here
  console.log('current supply issue');
  console.log(currentSupplyIssue);
  const changeFormValue = (setValue) => (event) => {
    setValue(event.target.value);
  };

  const linkIssues = async (outwardIssueKey) => {
    // setLoading(true);
    try {
      console.log('inward keyyyyy' + currentSupplyIssue.key);
      console.log('outward keyyyyy' + outwardIssueKey);
      const response = await axios.post('http://localhost:3001/linkIssues', {
        inwardIssueKey: currentRequest.key,
        outwardIssueKey: outwardIssueKey,
        linkType: 'relates',
      });
      // setReporter({ name: '', email: '', npi: '' });
    } catch (error) {
      console.error('Error retrieving tickets:', error);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    let options;
    switch (firstSelectorValue) {
      case 'None':
        options = ['None'];
        break;
      case 'Access/Software (Clinician)':
        options = [
          'None',
          'AirMD',
          'Doximity',
          'Lab Questions',
          'Learning Community',
          'Quantaflo',
          'Schedule Optimization',
          'Update iOS',
          'V2 App Update',
          'V2 Cancellations',
          'V2 Clarifications',
          'V2 DX Validation',
          'V2 Freezing',
          'V2 Medication field',
          'V2 Syncing',
          'V2 Training mode',
          'V2 Unfinalized/ Past Due',
          'V2 Update',
          'vHRE',
        ];
        break;
      case 'Access/Software (Internal)':
        options = ['None', 'Absolute', 'Ad Manager Plus', 'Adobe Creative Cloud', 'Adobe Standard', 'ADP'];
        break;
      case 'Applications With Approvals':
        options = ['None'];
        break;
      case 'Department Transfer':
        options = ['None'];
        break;
      case 'Gsuite':
        options = ['None'];
        break;
      case 'Hardware':
        options = ['None'];
        break;
      case 'Information Services':
        options = ['None'];
        break;
      case 'New Hire':
        options = ['None'];
        break;
      case 'Password/Locked Accounts':
        options = ['None'];
        break;
      case 'Termination':
        options = ['None'];
        break;
      // ... other cases ...
      default:
        options = ['None'];
    }
    setSecondSelectorOptions(options);
    console.log('firstSelectorValue', firstSelectorValue);
  }, [firstSelectorValue]);
  return (
    <div className="supplyFormContainer">
      <div className="ticketFormHeader">
        <h1>Current Status : {currentSupplyIssue.fields.status.name}</h1>
      </div>
      <div className="ticketForm" action="/">
        <div className="ticketFormCommentSection">
          <div className="ticketFormResolveContainer">
            <div className="ticketFormResolveItems">
              <div className="ticketFormResolveItemHeader">Resolution </div>
              <select className="ticketFormResolveItemBody">
                <option value="Resolved">Resolved</option>
                <option value="Unresolved">Unresolved</option>
              </select>
            </div>
            <div className="ticketFormResolveItems">
              <div className="ticketFormResolveItemHeader">Linked Issues</div>
              <select className="ticketFormResolveItemBody" value={supplyLinkType} onChange={changeFormValue(setSupplyLinkType)}>
                <option value="relates to">relates to</option>
                <option value="is cloned">is cloned by</option>
                <option value="is duplicated by">is duplicated by</option>
                <option value="is blocked by">is blocked by</option>
              </select>
            </div>
            <div className="ticketFormResolveItems">
              <div className="ticketFormResolveItemHeader">Issue </div>
              {/* <div className="ticketFormResolveItemBodyIssues">
                  {linkedRequests.length > 0 &&
                    linkedRequests.map((value, index) => (
                      <div key={index} className="ticketFormResolveItemBodyIssueKeys">
                        <div>{value}</div>
                        <button onClick={() => handleRemoveValue(index)}>x</button>
                      </div>
                    ))}
                  <input
                    className="ticketFormResolveItemBodyIssueInput"
                    type="text"
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        handleAddValue(event.target.value);
                        event.target.value = '';
                        event.preventDefault();
                      }
                    }}
                  />
                </div> */}
            </div>
            <div className="ticketFormResolveItems">
              <div className="ticketFormResolveItemHeader">Resolved at Service Desk level</div>
              <div className="ticketFormResolveItemBodylabel">
                <label className="ticketFormResolveItemBodylabels">
                  <input
                    type="radio"
                    value="None"
                    name="category"
                    onClick={(e) => {
                      setResolvedServiceLevel(e.target.value);
                    }}
                  />
                  None
                </label>
                <label className="ticketFormResolveItemBodylabels">
                  <input
                    type="radio"
                    //Jira value for Yes
                    value="13502"
                    name="category"
                    onClick={(e) => {
                      setResolvedServiceLevel(e.target.value);
                    }}
                  />
                  Yes
                </label>
                <label className="ticketFormResolveItemBodylabels">
                  <input
                    type="radio"
                    //Jira value for No
                    value="13503"
                    name="category"
                    onClick={(e) => {
                      setResolvedServiceLevel(e.target.value);
                    }}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="ticketFormResolveItems">
              <div className="ticketFormResolveItemHeader">Service Request Category </div>
              <div className="ticketFormResolveItemBodyCategories">
                <select className="ticketFormResolveItemBodyCategorySelector" value={firstSelectorValue} onChange={(e) => setFirstSelectorValue(e.target.value)}>
                  <option>None</option>
                  <option>Access/Software (Clinician) </option>
                  <option>Access/Software (Internal) </option>
                  <option>Applications With Approvals </option>
                  <option>Department Transfer </option>
                  <option>Gsuite </option>
                  <option>Hardware </option>
                  <option>Information Services </option>
                  <option>New Hire </option>
                  <option>Password/Locked Accounts </option>
                  <option>Termination </option>
                </select>
                <select className="ticketFormResolveItemBodyCategorySelector">
                  {secondSelectorOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="ticketCommentSection">
            <CommentSection />
          </div>
        </div>

        <div className="ticketFormButtonContainer">
          <div className="ticketFormSecondButton" onClick={() => history.push('/reporterInfo')}>
            Cancel
          </div>

          {/* <button className="ticketFormButton" onClick={(e) => finalizeClick(e)}>
              Resolve
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default SupplySubmitPage;
