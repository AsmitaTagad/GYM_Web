import React from "react";
import a from "./About.module.css";
import  Footer  from "../footer/Footer";

export default function About() {
  return (
    <>
    <div className={a.container}>
      <div className={a.left}>
        <div className={a.Lvideo}>
          <iframe
            src="https://www.youtube.com/embed/liBq75smdo8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={a.para}>
          <p>
            Being physically and mentally fit is necessary to live a happy, long
            life. Exercise is one of the best ways to keep a person healthy.
            Hence, it is always best to find a workout routine no matter how
            busy you are. With the numerous diseases that spread today, many
            individuals realized the essence of workout. Specifically, having a
            workout routine will give an individual the greatest physical,
            mental, and social benefits.
          </p>
        </div>
      </div>
      <div className={a.right}>
        <div>
          <p className={a.para}>
            Accordingly, exercise will help you increase energy levels, reduce
            chronic disease risk, lose weight, and help improve brain health and
            memory. With such benefits, you probably will love to do workout
            routines soon. Luckily, you don’t need to do it yourself as various
            personal trainers, or professional fitness coaches provide the help
            you need. And joining fitness classes is just at your fingertips.
          </p>
        </div>
        <div className={a.Rvideo}>
          <iframe
            src="https://www.youtube.com/embed/XP1Ne5mBn_A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  );
}
