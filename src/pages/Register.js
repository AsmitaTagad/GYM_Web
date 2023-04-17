import React from 'react'

export default function Register() {
  return (
    <div>
      <p>Name</p>
      <input type="text" placeholder='Enter Name' />
      <p>Address</p>
      <input type="text" placeholder='Enter Address' />
      <p>Email</p>
      <input type="email" placeholder='Enter Email' />
      <p>Phone Number</p>
      <input type="text" placeholder='Enter Phone no' />
      <p>Create Password</p>
      <input type="Password" placeholder='Choose Password' />
    
      <button>SignUp</button>
    </div>
  )
}
