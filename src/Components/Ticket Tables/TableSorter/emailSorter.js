const emailSorter = (allIssuesArray, direction) => {
  let sortedEmailAddresses;
  if (direction === 'ascending') {
    sortedEmailAddresses = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.reporter.name;
      let valueB = b.fields.reporter.name;

      return valueA.localeCompare(valueB, 'en', { numeric: true });
    });
  } else {
    sortedEmailAddresses = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.reporter.name;
      let valueB = b.fields.reporter.name;

      return valueB.localeCompare(valueA, 'en', { numeric: true });
    });
  }

  return sortedEmailAddresses;
};

export default emailSorter;
