import React,{useState} from 'react'
import r from '../Login.module.css'

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [Password, setPassword] = useState('');

  const [user, setUser] = useState([]);

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
  }
  
  return (
    <div className={r.main_bg}>
    <div className={r.body_r}>
      <form onSubmit={handleSubmit}>
        <p className={r.lebel_r}>Name</p>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          className={r.input_r}
          onChange={(e) => setName(e.target.value)}
        />
        <p className={r.lebel_r}>Email</p>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          className={r.input_r}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={r.lebel_r}>Phone Number</p>
        <input
          type="text"
          placeholder="Enter Phone no"
          value={number}
          className={r.input_r}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p className={r.lebel_r}>Create Password</p>
        <input
          type="Password"
          placeholder="Choose Password"
          value={Password}
          className={r.input_r}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" className={r.btn_r} />

        {/* <button className={r.btn_r}>SignUp</button> */}
      </form>
    </div>
  </div>
  )
}
