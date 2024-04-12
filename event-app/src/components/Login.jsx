import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/login.css'; // Import the CSS file here

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials against localStorage
    const storedData = localStorage.getItem(credentials.username);
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.password === credentials.password) {
        console.log('Login successful');
        navigate('/events'); // Redirect to add events page
      } else {
        alert('Incorrect username or password!');
      }
    } else {
      alert('User does not exist. Please register.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p onClick={() => navigate('/register')}>Don't have an account? Register</p>
      </form>
    </div>
  );
};

export default Login;