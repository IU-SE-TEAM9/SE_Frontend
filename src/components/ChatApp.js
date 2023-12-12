// ChatApp.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import AuthForm from './AuthForm';

const socket = io('http://localhost:3001'); // replace with your backend URL

const ChatApp = ({ username, userType }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const recipient = userType === 'admin' ? 'client' : 'admin';

      const newMessage = {
        text: messageInput,
        recipient,
      };

      socket.emit('sendMessage', newMessage);
      setMessageInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
