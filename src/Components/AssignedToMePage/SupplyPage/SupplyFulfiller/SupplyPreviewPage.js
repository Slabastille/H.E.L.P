import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import extractValues from '../supplyTranslator';
import StateSelector from '../StateSelector';
import ProviderSupplies from '../ProviderSupplies';
import HelpContext from '../../../../context/HelpContext';

const SupplyPreviewPage = ({ currentSupplyIssue }) => {
  const history = useHistory();
  const [apiBody, setApiBody] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  const { supplyReporter, setSupplyReporter } = useContext(HelpContext);
  const { linkedSupplyrequests, setLinkedSupplyRequests } = useContext(HelpContext);
  const supplyTicketInfo = currentSupplyIssue.fields.description;
  const infoValues = extractValues(supplyTicketInfo);
  console.log('I JUST RENDEREDDDDDDDD I JUST RENDEREDDDDDDDD I JUST RENDEREDDDDDDDD I JUST RENDEREDDDDDDDD');
  useEffect(() => {
    setApiBody(infoValues);
    // setDataLoad(true);
    //updateSupplyReporter(infoValues);
  }, []);

  // const updateSupplyReporter = (apiBody) => {
  //   setSupplyReporter({ name: apiBody.Name, email: apiBody.Email, phone: apiBody.PhoneNumber, npi: apiBody.Npi });
  // };

  const handleChange = (event) => {
    setApiBody({ ...apiBody, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     'http://localhost:3001/createJiraIssue',
    //     {
    //       summary: summary,
    //       description: description,
    //     }
    //   );

    //   console.log('Jira issue created:', response.data);
    //   //window.location.href = `https://jira.signifyhealth.com/projects/MS/queues/custom${response.data.key}`;
    // } catch (error) {
    //   console.error('Error creating Jira issue:', error);
    // }
    //window.alert('Your supply request has been submitted');
    history.push(`/fulfill-request/${currentSupplyIssue.key}/submit`);
  };
  if (!dataLoad) {
    return <div>Loading...</div>;
  }
  return (
    <div className="supplyFormContainer">
      <div className="supplyFormHeader">
        <h1>Supply Request Preview</h1>
      </div>
      <div className="supplyForm">
        <div className="supplyFormItemsContainer">
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Npi </div>
            <input className="supplyFormItemType1" name="Npi" onChange={handleChange} defaultValue={apiBody.Npi} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Name </div>
            <input className="supplyFormItemType1" name="Name" onChange={handleChange} defaultValue={apiBody.Name} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Addres 1</div>
            <input className="supplyFormItemType1" name="Address1" onChange={handleChange} defaultValue={apiBody.Address1} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Address 2</div>
            <input className="supplyFormItemType1" name="Address2" onChange={handleChange} defaultValue={apiBody.Address2} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">City </div>
            <input className="supplyFormItemType1" name="City" onChange={handleChange} defaultValue={apiBody.City} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">State</div>
            <StateSelector name="State" onChange={handleChange} defaultValue={apiBody.State} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Zip Code</div>
            <input className="supplyFormItemType1" name="Zip" onChange={handleChange} defaultValue={apiBody.Zip} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Personal Phone Number </div>
            <input className="supplyFormItemType1" name="PhoneNumber" onChange={handleChange} defaultValue={apiBody.PhoneNumber} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Email Address </div>
            <input className="supplyFormItemType1" name="Email" onChange={handleChange} defaultValue={apiBody.Email} />
          </div>
          <div className="supplyFormItem">
            <div className="supplyFormItemIdentifier">Deliverables </div>
            <ProviderSupplies name="Deliverables" onChange={handleChange} defaultValue={apiBody.Deliverables} />
          </div>
        </div>
        <div className="ticketFormButtonContainer">
          <div className="ticketSecondButton">Cancel</div>
          <button onClick={handleSubmit} className="ticketFormButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplyPreviewPage;
