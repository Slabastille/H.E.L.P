function extractValues(str) {
  const nameMatch = str.match(/Full Name: (.*)\n/);
  const Name = (nameMatch && nameMatch[1]) || '***';

  const npiMatch = str.match(/NPI: (.*)\n/);
  const Npi = (npiMatch && npiMatch[1]) || '***';

  const emailMatch = str.match(/Email Address: (.*)\n/);
  const Email = (emailMatch && emailMatch[1]) || '***';

  const phoneMatch = str.match(/Mobile Phone: (.*)\n/);
  const PhoneNumber = (phoneMatch && phoneMatch[1]) || '***';

  const address1Match = str.match(/Address Line 1: (.*)\n/);
  const Address1 = (address1Match && address1Match[1]) || '***';

  const address2Match = str.match(/Address Line 2: (.*)\n/);
  const Address2 = (address2Match && address2Match[1]) || '***';

  const cityMatch = str.match(/City: (.*)\n/);
  const City = (cityMatch && cityMatch[1]) || '***';

  const stateMatch = str.match(/State: (.*)\n/);
  const State = (stateMatch && stateMatch[1]) || '***';

  const zipMatch = str.match(/Zip: (.*)\n/);
  const Zip = (zipMatch && zipMatch[1]) || '***';

  const requestedReturnLabelsMatch = str.match(/RequestedReturnLabels: (.*)\n/);
  const RequestedReturnLabels = requestedReturnLabelsMatch
    ? requestedReturnLabelsMatch[1].split(', ')
    : [];

  const requestedIpadAccessoriesMatch = str.match(
    /Requested iPad\/Accessories: (.*)\n/
  );
  const RequestedIpadAccessories = requestedIpadAccessoriesMatch
    ? requestedIpadAccessoriesMatch[1].split(', ')
    : [];

  // ... repeat for other fields ...
  const Deliverables = [...RequestedReturnLabels, ...RequestedIpadAccessories];
  return {
    Name,
    Npi,
    Email,
    PhoneNumber,
    Address1,
    Address2,
    City,
    State,
    Zip,
    Deliverables,
    /*, ... other fields ... */
  };
}
export default extractValues;
