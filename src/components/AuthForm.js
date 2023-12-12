// AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('client'); // Default to client

  const handleLogin = () => {
    // Add your authentication logic here (e.g., API call to verify credentials)
    // For simplicity, this example assumes that the credentials are correct.
    onLogin({ username, userType });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select onChange={(e) => setUserType(e.target.value)} value={userType}>
        <option value="client">Client</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthForm;
