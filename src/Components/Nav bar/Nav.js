import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import n from './Nav.module.css'
import { CgMenu, CgClose } from "react-icons/cg";


export default function Nav() {
  const [show , setShow] =useState(false)
  return (
    <div  className={n.main} >
        <div className={n.logo}>
          <img src="https://cdn.dribbble.com/users/23569/screenshots/1916746/gym_peak_logo.png" alt="" />
        </div>
        <div className={`${show ?n.m_links:n.links}`}>
            <li className={n.link}><NavLink to='/'>Home</NavLink> </li>
            <li className={n.link}><NavLink to='/Product'>Course</NavLink> </li>
            <li className={n.link}><NavLink to='/Contact'>Contact</NavLink> </li>
            <li className={n.link}><NavLink to='/About'>About Us</NavLink> </li>
            <li className={n.link}><NavLink to='/Login'>Join Us</NavLink> </li>
        </div>
        <div className={n.mobile_navbar_btn}>
                <div>
                    {
                        show ? (
                            <span className={n.close} onClick={() => setShow(false)}>
                                <CgClose size={30} />
                            </span>
                        ) : (
                            <span className={n.menu} onClick={() => setShow(true)}>
                                <CgMenu size={30} />
                            </span>
                        )
                    }

                </div>
            </div>
      
    </div>
  )
}
