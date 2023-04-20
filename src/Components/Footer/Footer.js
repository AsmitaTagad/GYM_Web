import React from 'react'
import f from './Footer.module.css'

export default function Footer() {
    return (
        <div className={f.main}>
            <div className={f.gym}>
                <img src="https://cdn.dribbble.com/users/23569/screenshots/1916746/gym_peak_logo.png" alt="" />
            </div>
            <div className={f.icons}>
                <div className={f.logos}>
                    <img src="https://i.pinimg.com/736x/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg" alt="" className={f.logo} />
                    <span className={f.o}>FaceBook Us</span></div>
                <div className={f.logos}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.gOAtLIyfMTNrYLedH7l5qQHaHa&pid=Api&P=0" alt="" className={f.logo} />
                    <span className={f.o}>Instagram Us</span></div>
                <div className={f.logos}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.XZMQynreehNOD_7_tI8KFQHaHa&pid=Api&P=0" alt="" className={f.logo} />
                    <span className={f.o}>Whatsapp Us</span></div>



            </div>
            <div className={f.txt}>
                <h3 className={f.o}>Hurry Up Guys!</h3>
                <span className={f.w}>Limited seats Are Available</span>
            </div>


        </div>
    )
}
