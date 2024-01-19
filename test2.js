const str =
  'A supply request has been submitted for your review:\n\n--------------------------------------------------------------------\n\nFull Name: Lisa Grolling\n\nNPI: 1427665082\n\nEmail Address: lgrolling@signifyhealth.com\n\nMobile Phone: 5857974811\n\nAddress Line 1: 91 Butcher Rd\n\nAddress Line 2:\n\nCity: Hilton\n\nState: NY\n\nZip: 14468\n\nRequested Forms:\n\nRequested Return Labels:\n\nRequested Lab Supplies: Spirometry Turbines, Hand Sanitizer, Sanitizing Wipes\n\nRequested iPad/Accessories: Alkaline Batteries – AAA\n\nOther:\n\nApplication: CareConsultiPad, Version: 2.33.1\n\nOperating System: iOS, Version: 17.2';

const values = extractValues(str);
console.log(values);
/*

<form onSubmit={handleSubmit} className="supplyForm">
          <div>
            <div>NPI Number</div>
            <input
              type="text"
              name="NPI Number"
              placeholder={infoValues.npi}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Provider Name</div>
            <input
              type="text"
              name="Provider Name"
              placeholder={infoValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Name</div>
            <input
              type="text"
              name="Name"
              placeholder={infoValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Address 1</div>
            <input
              type="text"
              name="Address 1"
              placeholder={infoValues.address1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Address 2</div>
            <input
              type="text"
              name="Address 2"
              placeholder={infoValues.address2}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>City</div>
            <input
              type="text"
              name="City"
              placeholder={infoValues.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>State</div>
            <input
              type="text"
              name="State"
              placeholder={infoValues.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Zip</div>
            <input
              type="text"
              name="Zip"
              placeholder={infoValues.zip}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Country</div>
            <input
              type="text"
              name="Country"
              placeholder={'United States'}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Phone</div>
            <input
              type="text"
              name="Phone"
              placeholder={infoValues.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Email</div>
            <input
              type="text"
              name="Email"
              placeholder={infoValues.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>Deliverables</div>
            <input type="text" name="Deliverables" placeholder="" />
          </div>
          <div>
            <div>Assets User Name</div>
            <input
              type="text"
              name="Asset User Name"
              placeholder={infoValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>iPad</div>
            <input
              type="text"
              name="iPad"
              placeholder={infoValues.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit button */
//   <button type="submit">Submit</button>
// </form>
