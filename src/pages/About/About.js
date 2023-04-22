import React from "react";
import a from "./About.module.css";


export default function About() {
  return (
    <div className={a.container}>
      <div className={a.up}>
        <div className={a.content}>
          <iframe
            src="https://www.youtube.com/embed/liBq75smdo8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={a.content}>
          
         <p>Lorem ipsum dolor sit amet consectetur <span>Lorem ipsum dolor sit amet.</span> adipisicing elit. Error modi qui magnam quidem? Temporibus quo laborum cum <span>Lorem ipsum dolor sit amet.</span> veniam deserunt veritatis earum quia rerum ipsa, optio pariatur placeat voluptatum, vero sit?</p> 
        </div>

      </div>
      <div className={a.down}>
        <div className={a.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span>Lorem ipsum dolor sit amet.</span> Odit, dignissimos! Iure porro modi eum dolorem ipsa voluptates <span>Lorem ipsum dolor sit amet.</span> molestiae ullam ab fuga illum hic est voluptatem ipsam, expedita neque accusantium non!</p></div>
        <div className={a.content}><iframe
          src="https://www.youtube.com/embed/XP1Ne5mBn_A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        </div>

      </div>


    </div>
  )
}