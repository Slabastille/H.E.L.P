import React from 'react';
function extractDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()]; // Months are 0-based in JavaScript
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
}

export default extractDate;
