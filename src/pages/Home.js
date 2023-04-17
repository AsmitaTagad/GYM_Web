import React from 'react'
import h from './Home.module.css'

export default function Home() {
  return (
    <div className={h.main}>
      <div className={h.body}>
        <div>
          <span className={h.orange}> We Are The Gym</span>
        <p className={h.white}> A fitness movement that is worth breaking a sweat for </p>
        <br />
        <span className={h.orange}>One membership </span>
        <p className={h.white}>for all your fitness needs</p>

        </div>
        
        <div className={h.img}>
        <img src="" alt="" />
      
        </div>
        
      </div>

      
    </div>

  )
}
