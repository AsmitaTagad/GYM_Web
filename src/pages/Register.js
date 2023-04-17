import React from 'react'
import r from './Login.module.css'

export default function Register() {
  return (
    <div className={r.main_bg}>
      <div className={r.body_r}>
      <p className={r.lebel_r}>Name</p>
      <input type="text" placeholder='Enter Name' className={r.input_r} />
      <p className={r.lebel_r}>Address</p>
      <input type="text" placeholder='Enter Address' className={r.input_r} />
      <p className={r.lebel_r}>Email</p>
      <input type="email" placeholder='Enter Email' className={r.input_r} />
      <p className={r.lebel_r}>Phone Number</p>
      <input type="text" placeholder='Enter Phone no' className={r.input_r} />
      <p className={r.lebel_r}>Create Password</p>
      <input type="Password" placeholder='Choose Password'  className={r.input_r}/>
    
      <button className={r.btn_r}>SignUp</button>
      </div>
      
    </div>
  )
}
