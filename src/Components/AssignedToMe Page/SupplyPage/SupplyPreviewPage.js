import React, { useState, useEffect } from 'react';
import extractValues from './supplyTranslator';
import StateSelector from './StateSelector';
import ProviderSupplies from './ProviderSupplies';

const SupplyPreviewPage = (props) => {
  const [apiBody, setApiBody] = useState({});
  const supplyTicketInfo = props.location.state.myProp;
  const infoValues = extractValues(supplyTicketInfo.fields.description);
  const [dataLoad, setDataLoad] = useState(false);

  useEffect(() => {
    setApiBody(infoValues);
    setDataLoad(true);
  }, []);

  console.log('api below here');
  console.log(apiBody);
  console.log('api above here');

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
    window.alert('Your supply request has been submitted');
  };
  if (!dataLoad) {
    return <div>Loading...</div>;
  }
  return (
    <div className="landingContainer">
      <div className="mainSection">
        <div className="supplyFormContainer">
          <div className="supplyHeader">
            <h1>Supply Request Preview</h1>
          </div>
          <div className="supplyForm">
            <div className="supplyFormChild">
              <div>Npi </div>
              <input
                className=".supplyFormInput"
                name="Npi"
                onChange={handleChange}
                defaultValue={apiBody.Npi}
              />
            </div>
            <div className="supplyFormChild">
              <div>Name </div>
              <input
                className=".supplyFormInput"
                name="Name"
                onChange={handleChange}
                defaultValue={apiBody.Name}
              />
            </div>
            <div className="supplyFormChild">
              <div>Addres 1</div>
              <input
                className=".supplyFormInput"
                name="Address1"
                onChange={handleChange}
                defaultValue={apiBody.Address1}
              />
            </div>
            <div className="supplyFormChild">
              <div>Address 2</div>
              <input
                className=".supplyFormInput"
                name="Address2"
                onChange={handleChange}
                defaultValue={apiBody.Address2}
              />
            </div>
            <div className="supplyFormChild">
              <div>City </div>
              <input
                className=".supplyFormInput"
                name="City"
                onChange={handleChange}
                defaultValue={apiBody.City}
              />
            </div>
            <div className="supplyFormChild">
              <div>State</div>
              <StateSelector
                name="State"
                onChange={handleChange}
                defaultValue={apiBody.State}
              />
            </div>
            <div className="supplyFormChild">
              <div>Zip Code</div>
              <input
                className=".supplyFormInput"
                name="Zip"
                onChange={handleChange}
                defaultValue={apiBody.Zip}
              />
            </div>
            <div className="supplyFormChild">
              <div>Personal Phone Number </div>
              <input
                className=".supplyFormInput"
                name="PhoneNumber"
                onChange={handleChange}
                defaultValue={apiBody.PhoneNumber}
              />
            </div>
            <div className="supplyFormChild">
              <div>Email Address </div>
              <input
                className=".supplyFormInput"
                name="Email"
                onChange={handleChange}
                defaultValue={apiBody.Email}
              />
            </div>
            <div className="supplyFormChild">
              <div>Deliverables </div>
              <ProviderSupplies
                name="Deliverables"
                onChange={handleChange}
                defaultValue={apiBody.Deliverables}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyPreviewPage;
