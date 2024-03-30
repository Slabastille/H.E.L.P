const dateSorter = (allIssuesArray, sortKey, direction) => {
  let sortedDates;
  if (direction === 'ascending') {
    sortedDates = allIssuesArray.sort((a, b) => {
      const dateA = a.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
      const dateB = b.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
      if (dateA === dateB) {
        const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
        const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
        return timeA - timeB;
      }
      return new Date(dateA) - new Date(dateB);
    });
  } else if (direction === 'descending') {
    sortedDates = allIssuesArray.sort((a, b) => {
      const dateA = a.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
      const dateB = b.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
      if (dateA === dateB) {
        const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
        const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
        return timeB - timeA;
      }
      return new Date(dateB) - new Date(dateA);
    });
  }

  return sortedDates;
};

export default dateSorter;
