import React from 'react';
import { createContext, useState } from 'react';

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requestType, setRequestType] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  return (
    <HelpContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        requestType,
        setRequestType,
        summary,
        setSummary,
        description,
        setDescription,
      }}
    >
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;
