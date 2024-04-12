import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/register.css'; // Make sure this path is correct

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to localStorage
    localStorage.setItem(userData.username, JSON.stringify(userData));
    console.log('Registration successful');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <p onClick={() => navigate('/login')}>Already have an account? Login</p>
      </form>
    </div>
  );
};

export default Register;
