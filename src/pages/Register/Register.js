import React, { useState } from 'react';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [user] = useState([]);

  //validation
  // const [userName, setNameisValid] = useState(true);
  // const [userPass, setPassisValid] = useState(true);
  // const [userNum, setNumberisValid] = useState(true);
  // const [userEmail, setEmailisValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(number)
    user.push({
      name,
      email,
      number,
      Password,
    });
    // console.log(user)
    localStorage.setItem('user', JSON.stringify(user));

    setName("");
    setEmail('');
    setNumber("");
    setPassword("");
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <p >Name</p>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
        
            onChange={(e) => setName(e.target.value)}
          />
          <p >Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
       
            onChange={(e) => setEmail(e.target.value)}
          />
          <p >Phone Number</p>
          <input
            type="text"
            placeholder="Enter Phone no"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <p >Create Password</p>
          <input
            type="Password"
            placeholder="Choose Password"
            value={Password}
           
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" />
        
          {/* <button className={r.btn_r}>SignUp</button> */}
        </form>

      </div>
    </div>
  );
}
