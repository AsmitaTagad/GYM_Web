import React from 'react'
import f from './Footer.module.css'
import {FaFacebookSquare,FaInstagram,FaTwitterSquare} from "react-icons/fa";

export default function Footer() {
    return (
        <div className={f.main}>
            <div className={f.gym}>
                <img src="https://cdn.dribbble.com/users/23569/screenshots/1916746/gym_peak_logo.png" alt="" />
            </div>
            <div className={f.icons}>
    
               <div className={f.social}>
                <a href="https://www.facebook.com/asmita.tagad" className={f.logo} icons={FaFacebookSquare}><FaFacebookSquare size={30}/></a>
                <span className={f.o}>Contact On facebook</span>
               </div>
               <div className={f.social}>
                <a href="https://www.instagram.com/its_a_smita07/" className={f.logo} icons={FaInstagram}><FaInstagram size={30}/></a>
                <span className={f.o}>Contact On Instagram</span>
               </div>
               <div className={f.social}>
                <a href="www.twitter.com" className={f.logo} icons={FaTwitterSquare}><FaTwitterSquare size={30}/></a>
                <span className={f.o}>Contact On twitter</span>
               </div>


            </div>
            <div className={f.txt}>
                <h3 className={f.o}>Hurry Up Guys!</h3>
                <span className={f.w}>Limited seats Are Available</span>
            </div>


        </div>
    )
}
