import React, { useEffect, useState } from 'react'
import h from './Home.module.css'
import { Data } from './Home Image/Data'

export default function Home() {
  const [data, setData] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData((data) => (data + 1) % Data.length);
    }, 2500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={h.main_bg}>
      <div className={h.main}>
      <div className={h.body}>
        <div className={h.box}>
          <span className={h.orange}>WELCOME TO THE GYM! </span>
          <p className={h.white}>Take care of your body. It's the only place you have to live </p>

          <span className={h.orange}>We Are The Gym</span>
          <p className={h.white}> A fitness movement that is worth breaking a sweat for </p>
          
          <span className={h.orange}>One membership </span>
          <p className={h.white}>for all your fitness needs</p>

        </div>

        <div className={h.img}>
          <img src={Data[data]} alt="" />

        </div>

      </div>


    </div>
    </div>
    

  )
}
