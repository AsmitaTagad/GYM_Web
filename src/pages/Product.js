import React from 'react'
import p from './Product.module.css'
import { Course } from './Course/CourseData'

export default function Product() {



  return (
    <div >
      <div className={p.main}>
        <div className={p.wrap}>
          {Course.map((e) => {
            return (
              <div key={e.id} className={p.box}>
                <img src={e.img} alt="" className={p.img} />
                <p className={p.item}>{e.item} </p>
                <button>{e.Price} / month</button>
              </div>
            )
          })}
        </div>
        <div className={p.vcontrainer}>
          <div className={p.txt}>
            <span>
              Join Us now For :
            </span>
            <p>Get fit, don’t quit, and stay fit. Get into the fitness world. Work it out and get a jump on your day. Get into fitness and love life. </p>
          </div>
          <div className={p.vdo}><iframe width="350" height="180" src="https://www.youtube.com/embed/BvuaBsHMiOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
