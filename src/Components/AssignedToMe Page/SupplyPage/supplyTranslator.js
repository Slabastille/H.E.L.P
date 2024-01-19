function extractValues(str) {
  const nameMatch = str.match(/Full Name: (.*)\n/);
  const name = (nameMatch && nameMatch[1]) || '***';

  const npiMatch = str.match(/NPI: (.*)\n/);
  const npi = (npiMatch && npiMatch[1]) || '***';

  const emailMatch = str.match(/Email Address: (.*)\n/);
  const email = (emailMatch && emailMatch[1]) || '***';

  const phoneMatch = str.match(/Mobile Phone: (.*)\n/);
  const phone = (phoneMatch && phoneMatch[1]) || '***';

  const address1Match = str.match(/Address Line 1: (.*)\n/);
  const address1 = (address1Match && address1Match[1]) || '***';

  const address2Match = str.match(/Address Line 2: (.*)\n/);
  const address2 = (address2Match && address2Match[1]) || '***';

  const cityMatch = str.match(/City: (.*)\n/);
  const city = (cityMatch && cityMatch[1]) || '***';

  const stateMatch = str.match(/State: (.*)\n/);
  const state = (stateMatch && stateMatch[1]) || '***';

  const zipMatch = str.match(/Zip: (.*)\n/);
  const zip = (zipMatch && zipMatch[1]) || '***';

  // ... repeat for other fields ...

  return {
    name,
    npi,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    zip /*, ... other fields ... */,
  };
}
export default extractValues;
