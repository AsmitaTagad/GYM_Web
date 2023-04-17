import React from 'react'
import { Link } from 'react-router-dom'
import l from './Login.module.css'

export default function Login() {
  return (
    <div>
      <p>User Id</p>
      <input type="text" placeholder='Enter User Id' />
      <p>Password</p>
      <input type="text" placeholder='Enter Password' />
      <div>
        <h4>Don't have an account?</h4>
        <div>
          <Link to='/Register'><button>SignUp</button></Link>

          <button className={l.btn}>Login</button>
        </div>

      </div>

    </div>
  )
}
