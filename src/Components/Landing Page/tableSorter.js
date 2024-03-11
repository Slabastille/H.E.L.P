import React from 'react';
import extractTime from '../Ticket Tables/extractTime';

function tableSorter(arr, sortKey, direction) {
  let sortedArray = arr;
  console.log('sortArray:');
  console.log(sortedArray);
  if (direction === 'ascending') {
    if (
      sortKey === 'key' ||
      sortKey === 'fields.reporter.emailAddress' ||
      sortKey === 'fields.status.name' ||
      sortKey === 'fields.summary' ||
      sortKey === 'fields.reporter.emailAddress'
    ) {
      sortedArray = arr.sort((a, b) => {
        const keys = sortKey.split('.');
        let valueA = a,
          valueB = b;
        keys.forEach((key) => {
          valueA = valueA[key];
          valueB = valueB[key];
        });
        return valueA.localeCompare(valueB, 'en', { numeric: true });
      });
    } else if (sortKey === 'fields.created' || sortKey === 'fields.updated') {
      sortedArray = arr.sort((a, b) => {
        const dateA = a.fields[sortKey.split('.')[1]]
          .split('/')
          .reverse()
          .join('/');
        const dateB = b.fields[sortKey.split('.')[1]]
          .split('/')
          .reverse()
          .join('/');
        if (dateA === dateB) {
          const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
          const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
          return timeA - timeB;
        }
        return new Date(dateA) - new Date(dateB);
      });
    }
  } else {
    if (
      sortKey === 'key' ||
      sortKey === 'fields.reporter.emailAddress' ||
      sortKey === 'fields.status.name' ||
      sortKey === 'fields.summary' ||
      sortKey === 'fields.reporter.emailAddress'
    ) {
      sortedArray = arr.sort((a, b) => {
        const keys = sortKey.split('.');
        let valueA = a,
          valueB = b;
        keys.forEach((key) => {
          valueA = valueA[key];
          valueB = valueB[key];
        });
        return valueB.localeCompare(valueA, 'en', { numeric: true });
      });
    } else if (sortKey === 'fields.created' || sortKey === 'fields.updated') {
      sortedArray = arr.sort((a, b) => {
        const dateA = a.fields[sortKey.split('.')[1]]
          .split('/')
          .reverse()
          .join('/');
        const dateB = b.fields[sortKey.split('.')[1]]
          .split('/')
          .reverse()
          .join('/');
        if (dateA === dateB) {
          const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
          const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
          return timeB - timeA;
        }
        return new Date(dateB) - new Date(dateA);
      });
    }
  }
  return sortedArray;
}

export default tableSorter;
