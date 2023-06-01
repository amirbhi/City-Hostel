import React, { useState } from 'react';
import './signupform.css';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const SignUpForm = () => {
    const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform registration logic here
    try {
        // Send POST request to the server
        const response = await axios.post('http://localhost:5000/registerUser', {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        });
        
        // Handle the response from the server
        console.log('Registration successful:', response.data);
        
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        alert("Registration successful:")
        navigate("/login");
      } catch (error) {
        console.error('Registration failed:', error);
      }
  };

  return (
    <div className="container cont1 " style={{width:'60%',padding:'80px'}}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpForm;
