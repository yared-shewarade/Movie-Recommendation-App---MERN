// src/Login.js
import React, { useState } from 'react';
import '../src/styles.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add logic to send user credentials to the backend for authentication
    // For this example, we'll simulate a successful login
    // You can replace this with actual authentication logic

    // After successful login, navigate to the Home component
    // For now, we'll simulate navigation by setting window.location
    window.location.href = '/home';
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;