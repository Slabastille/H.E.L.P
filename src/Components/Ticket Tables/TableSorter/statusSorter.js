const statusSorter = (allIssuesArray, direction) => {
  let sortedStatus;
  if (direction === 'ascending') {
    sortedStatus = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.status.name;
      let valueB = b.fields.status.name;

      return valueA.localeCompare(valueB, 'en', { numeric: true });
    });
  } else {
    sortedStatus = allIssuesArray.sort((a, b) => {
      let valueA = a.fields.status.name;
      let valueB = b.fields.status.name;

      return valueB.localeCompare(valueA, 'en', { numeric: true });
    });
  }

  return sortedStatus;
};

export default statusSorter;
