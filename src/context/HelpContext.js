import React from 'react';
import { createContext, useState } from 'react';

const HelpContext = createContext();

export const HelpProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <HelpContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </HelpContext.Provider>
  );
};

export default HelpContext;
