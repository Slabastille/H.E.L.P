import React, { useState, useEffect } from 'react';
import extractValues from './supplyTranslator';

const SupplyPreviewPage = (props) => {
  const [isEditing, setIsEditing] = useState({});
  const [apiBody, setApiBody] = useState({});
  const supplyTicketInfo = props.location.state.myProp;
  const [formValues, setFormValues] = useState({});
  const infoValues = extractValues(supplyTicketInfo.fields.description);
  console.log('prop below here');
  console.log(infoValues);
  console.log('prop above here');

  useEffect(() => {
    setApiBody(infoValues);
  }, []);
  console.log('api below here');
  console.log(apiBody);
  console.log('api above here');

  const handleChange = (event) => {
    setApiBody({ ...apiBody, [event.target.name]: event.target.value });
  };
  const toggleEdit = (key) => {
    setIsEditing({ ...isEditing, [key]: !isEditing[key] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div>
      <h1>Header</h1>
      <div className="supplyFormContainer">
        <form onSubmit={handleSubmit} className="supplyForm">
          {Object.keys(apiBody).map((key) => (
            <div className="supplyFormChild" key={key}>
              <div>{key}</div>
              <div>
                {isEditing[key] ? (
                  <div>
                    <input
                      name={key}
                      type="text"
                      value={apiBody[key]}
                      onChange={handleChange}
                    />
                    <button
                      onClick={() => {
                        toggleEdit(key);
                      }}
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <div>{apiBody[key]}</div>
                    <div onClick={() => toggleEdit(key)}>Edit</div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SupplyPreviewPage;
