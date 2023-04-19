import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import n from './Nav.module.css'
import { CgMenu, CgClose } from "react-icons/cg";


export default function Nav() {
  const [show , setShow] =useState(false)
  return (
    <div  className={n.main} >
        <div className={n.logo}>
          <img src="http://www.thegym.in/img/thegym-logo.jpg" alt="" />
        </div>
        <div className={`${show ?n.m_links:n.links}`}>
            <li className={n.link}><NavLink to='/'>Home</NavLink> </li>
            <li className={n.link}><NavLink to='/Product'>Course</NavLink> </li>
            <li className={n.link}><NavLink to='/Contact'>Contact</NavLink> </li>
            <li className={n.link}><NavLink to='/About'>About Us</NavLink> </li>
            <li className={n.link}><NavLink to='/Login'>Login</NavLink> </li>
        </div>
        <div className={n.mobile_navbar_btn}>
                <div>
                    {
                        show ? (
                            <span className={n.close} onClick={() => setShow(false)}>
                                <CgClose />
                            </span>
                        ) : (
                            <span className={n.menu} onClick={() => setShow(true)}>
                                <CgMenu />
                            </span>
                        )
                    }

                </div>
            </div>
      
    </div>
  )
}
