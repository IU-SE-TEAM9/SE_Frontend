// Owner.js
import React, { useState } from 'react';
import { useWebSocket } from 'react-websocket';

const Owner = () => {
  const [messages, setMessages] = useState([]);
  const socketUrl = 'ws://localhost:3000';

  const { sendMessage } = useWebSocket(socketUrl, {
    onMessage: (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    },
  });

  return (
    <div>
      <h2>Owner Component</h2>
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

export default Owner;
