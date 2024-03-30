import React from 'react';

const setUserinfo = (name) => {
  if (name == 'name') {
    console.log('editing name');
  } else if (name == 'email') {
    console.log('editing email');
  } else if (name == 'npi') {
    console.log('editing npi');
  }
};

export default setUserinfo;
