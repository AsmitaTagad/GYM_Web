
import React, { useState } from 'react';
import l from './Login.module.css'
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const getUsersData = () => {
    const users = localStorage.getItem('users'); // getting data
    try {
      if (users) {
        // users is there
        return JSON.parse(users); // parsing
      }
    } catch (error) {
      return [];
    }
    return [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName || !email || !password) {
      setError('Please fill all fields');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
      
    } else if (password.length<=8)
    alert("plz enter required 8 word")
    const users = getUsersData();
    users.push({
      userName,
      email,
      password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    setError('');
    setUserName('');
    setEmail('');
    setPassword('');
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePass = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    // source: https://stackoverflow.com/a/46181/13924966
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={l.main} >
      <div className={l.body}>
        
        <form onSubmit={handleSubmit}>
          <div >
          <p className={l.lebel}> User Name:</p>
            <input
            className={l.input}
              type="text"
              placeholder="Enter your username"
              value={userName}
              onChange={handleUserName}
            />
            <br />
            <p className={l.lebel}> User Email:</p>
            <input
            className={l.input}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChangeEmail}
            />
            <br />
            <p className={l.lebel}>Password:</p>
            <input
            className={l.input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePass}
            />
            <br />
          </div>
          {error && <p className={l.error}>{error}</p>}
          <br />
          <div className={l.btns}>
            <p className={l.ac}>
              Already have an account?
              <br />
              <Link to="/Login">SignIn</Link>
            </p>
            <button className={l.btn}>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}