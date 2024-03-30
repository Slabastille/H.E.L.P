import React from 'react';
const handleSort = (key, setVariable) => {
  console.log('Current variable being set');
  console.log(setVariable);
  setVariable((prevState) => {
    let direction = 'ascending';
    if (prevState.key === key && prevState.direction === 'ascending') {
      direction = 'descending';
    }
    return { key, direction };
  });
};

export default handleSort;
