import React from 'react';
import extractTime from '../extractTime';
import emailSorter from './emailSorter';
import keySorter from './keySorter';
import dateSorter from './dateSorter';
import statusSorter from './statusSorter';
import summarySorter from './summarySorter';

function tableSorter(arr, sortKey, direction) {
  console.log('sortKey: ' + sortKey);
  let sortedArray = [...arr];
  console.log('current direction' + direction);

  switch (sortKey) {
    case 'key':
      sortedArray = keySorter(sortedArray, direction);
      break;

    case 'fields.reporter.name':
      sortedArray = emailSorter(sortedArray, direction);
      break;
    case 'fields.created':
    case 'fields.updated':
      sortedArray = dateSorter(sortedArray, sortKey, direction);
      break;
    case 'fields.status.name':
      sortedArray = statusSorter(sortedArray, direction);

    case 'fields.summary':
      sortedArray = summarySorter(sortedArray, direction);
  }

  // if (sortKey === 'fields.reporter.emailAddress') {
  //   emailSorter(sortedArray, direction);
  // }

  // console.log('sortArray:');
  // console.log(sortedArray);
  // if (direction === 'ascending') {
  //   console.log('Ascending with the help of : ' + sortKey);
  //   if (
  //     sortKey === 'key' ||
  //     sortKey === 'fields.reporter.emailAddress' ||
  //     sortKey === 'fields.status.name' ||
  //     sortKey === 'fields.summary' ||
  //     sortKey === 'fields.reporter.emailAddress'
  //   ) {
  //     sortedArray = arr.sort((a, b) => {
  //       const keys = sortKey.split('.');
  //       console.log('Keys are ascending ');
  //       console.log(keys);
  //       let valueA = a,
  //         valueB = b;
  //       keys.forEach((key) => {
  //         valueA = valueA[key];
  //         valueB = valueB[key];
  //       });
  //       return valueA.localeCompare(valueB, 'en', { numeric: true });
  //     });
  //   } else if (sortKey === 'fields.created' || sortKey === 'fields.updated') {
  //     sortedArray = arr.sort((a, b) => {
  //       const dateA = a.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
  //       const dateB = b.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
  //       if (dateA === dateB) {
  //         const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
  //         const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
  //         return timeA - timeB;
  //       }
  //       return new Date(dateA) - new Date(dateB);
  //     });
  //   }
  // } else {
  //   console.log('Descending with the help of : ' + sortKey);

  //   if (
  //     sortKey === 'key' ||
  //     sortKey === 'fields.reporter.emailAddress' ||
  //     sortKey === 'fields.status.name' ||
  //     sortKey === 'fields.summary' ||
  //     sortKey === 'fields.reporter.emailAddress'
  //   ) {
  //     sortedArray = arr.sort((a, b) => {
  //       const keys = sortKey.split('.');
  //       console.log('Keys are descending ');
  //       console.log(keys);
  //       let valueA = a,
  //         valueB = b;
  //       keys.forEach((key) => {
  //         valueA = valueA[key];
  //         valueB = valueB[key];
  //       });
  //       return valueB.localeCompare(valueA, 'en', { numeric: true });
  //     });
  //   } else if (sortKey === 'fields.created' || sortKey === 'fields.updated') {
  //     sortedArray = arr.sort((a, b) => {
  //       const dateA = a.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
  //       const dateB = b.fields[sortKey.split('.')[1]].split('/').reverse().join('/');
  //       if (dateA === dateB) {
  //         const timeA = extractTime(a.fields[sortKey.split('.')[1]]);
  //         const timeB = extractTime(b.fields[sortKey.split('.')[1]]);
  //         return timeB - timeA;
  //       }
  //       return new Date(dateB) - new Date(dateA);
  //     });
  //   }
  // }
  return sortedArray;
}

export default tableSorter;
