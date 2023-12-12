// MessageContext.js
import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const sendMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <MessageContext.Provider value={{ message, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  return useContext(MessageContext);
};
