import React from 'react'
import { Link } from 'react-router-dom'
import l from './Login.module.css'

export default function Login() {
  return (
    <div className={l.main}>
      <div className={l.body}>
      <p className={l.lebel}>User Id</p>
        <input type="text"  placeholder='Enter User Id' className={l.input}/>
        <p className={l.lebel}>Password</p>
        <input type="text"  placeholder='Enter Password' className={l.input}/>
        <div>
            <h4>Don't have an account?</h4>
            <div className={l.btns}>
                <Link to='/Register'><button className={l.btn}>SignUp</button></Link>
            
                <button className={l.btn}>Login</button>
            </div>
            
        </div>
      </div>
        
      
    </div>
  )
}
