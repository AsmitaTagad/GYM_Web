import React from 'react'
import h from './Home.module.css'

export default function Home() {
  return (
    <div className={h.main}>
      <div className={h.name}><h1>ReD ROX</h1></div>
      <div className={h.body}>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem est iste laudantium minus temporibus laboriosam veritatis voluptatibus ipsam assumenda.</p>
        </div>
        <div className={h.img}>
        <img src="https://wallpapercave.com/wp/wp2483079.jpg" alt="" />
      
        </div>
        
      </div>

      
    </div>

  )
}
