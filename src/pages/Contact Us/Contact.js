import React, { useRef } from "react";
import c from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formInput = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n3em5fo",
        "template_nhtm4bm",
        formInput.current,
        "eJw1yOsZJSAMJWVIK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={c.container}>
      <div className={c.header}>
        <h1>GET IN TOUCH</h1>
        <h3>You've got some Q's, and we've got tons of A's.</h3>
        <p>
          Ask us about an order, a product, or what you need to start smashing
          your fitness goals! Don't be shy - Our team of experts are available
          seven days a week through email, live chat or over the phone.We're
          ready to help you find the information you need to start living a fit
          and healthy lifestyle.
        </p>
      </div>

      <div className={c.contactInfo}>
        <div className={c.QueryForm}>
          <h2>Leave Us a Message</h2>
          <hr />
          <form ref={formInput} onSubmit={sendEmail} className={c.inputField}>
            <label>Full Name</label>

            <input type="text" placeholder="Full Name" name="user_name" />

            <label>Email id</label>

            <input type="Email" placeholder="Email id" name="user_email" />

            <label>Subject</label>

            <input type="text" placeholder="Subject" name="subject" />

            <label>Message</label>
            <br />
            <textarea name="massage" cols="30" rows="10"></textarea>
            <br />
            <button type="submit">Send Massage</button>
          </form>
        </div>

        <div className={c.address}>
          <div className={c.contactDetail}>
            <h5>1st Floor, Fortune Plaza, Kale Padal By Pass Road,Pune - 411028 </h5>
            <h5>Contact: +1800033438</h5>
            <h5>Email id: gymproject4@gmail.com</h5>
          </div>

          <span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906614332!2d73.69815082977925!3d18.524870613298763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681799491459!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" className={c.map} title="map"
            ></iframe>
          </span>
        </div>
      </div>
    </div>
  );
}