// Client.js
import React, { useState } from 'react';
import { useWebSocket } from 'react-websocket';

const Client = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const socketUrl = 'ws://localhost:3000';

  const { sendMessage } = useWebSocket(socketUrl, {
    onMessage: (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    },
  });

  const handleMessageSend = () => {
    sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <h2>Client Component</h2>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
      <div>
        <h3>Received Messages:</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Client;
