import React from 'react'
import { NavLink } from 'react-router-dom'
import n from './Nav.module.css'


export default function Nav() {
  return (
    <div  className={n.main} >
        <div className={n.logo}>
          <img src="http://www.thegym.in/img/thegym-logo.jpg" alt="" />
        </div>
        <div className={n.links}>
            <li className={n.link}><NavLink to='/'>Home</NavLink> </li>
            <li className={n.link}><NavLink to='/Product'>Course</NavLink> </li>
            <li className={n.link}><NavLink to='/Contact'>Contact</NavLink> </li>
            <li className={n.link}><NavLink to='/About'>About Us</NavLink> </li>
            <li className={n.link}><NavLink to='/Login'>Login</NavLink> </li>

            
        </div>
      
    </div>
  )
}
