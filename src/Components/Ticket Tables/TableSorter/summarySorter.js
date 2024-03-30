const summarySorter = (allIssuesArray, direction) => {
  let sortedSummary;
  if (direction === 'ascending') {
    sortedSummary = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.summary;
      let valueB = b.fields.summary;

      if (/^[^a-zA-Z0-9]/.test(valueA)) {
        return 1;
      }

      if (/^[^a-zA-Z0-9]/.test(valueB)) {
        return -1;
      }

      return valueA.localeCompare(valueB, 'en', { numeric: true });
    });
  } else {
    sortedSummary = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.summary;
      let valueB = b.fields.summary;
      if (/^[^a-zA-Z0-9]/.test(valueA)) {
        return -1;
      }

      // Check if valueB starts with a special character
      if (/^[^a-zA-Z0-9]/.test(valueB)) {
        return 1;
      }
      return valueB.localeCompare(valueA, 'en', { numeric: true });
    });
  }

  return sortedSummary;
};

export default summarySorter;
