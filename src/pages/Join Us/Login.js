import React, { useState, useEffect } from "react";
import r from './Login.module.css'
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users"));
    setUserList(data);
  }, []);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSumbit(event) {
    event.preventDefault();

    // Validate email and password
    setEmailError("");
    setPasswordError("");
    let isValid = true;
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Please enter your password.");
      isValid = false;
    } else if (password.length <= 3) alert("plz enter required 3 word");

    if (isValid) {
      // Check if user is in the user list
      const foundUser = userList.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        alert("You have successfully signed in.");
        nav("/");
      } else {
        alert("Incorrect email or password.");
      }
    }
  }

  return (
    <>
      <div className={r.main}>
        <div className={r.body} >
          
          <form onSubmit={handleSumbit}>
            <div >
              <p className={r.lebel}>Email:</p>
              <input
                className={r.input}
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div >{emailError}
              </div>}
              <br />
              <p className={r.lebel}>Password:</p>
              <input
              className={r.input}
                type="password"
                value={password}
                
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <div className={r.error}>{passwordError}
                </div>
              )}
            </div>
            <br />
            <div className={r.btns} >
              <p className={r.ac} >
                Don't have an account?
                <br />
                <Link to="/Register">Sign up</Link>
              </p>
              <button className={r.btn} >Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}