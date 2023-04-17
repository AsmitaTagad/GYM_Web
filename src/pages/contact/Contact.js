import React from 'react'
import c from './Contact.module.css'
export default function Contact() {
  return (
    <div>
      <header className={c.header}>
        <h1>GET IN TOUCH</h1>
        <p>You've got some Q's, and we've got tons of A's.</p>
      </header>
      <container>
        <p>Ask us about an order, a product, or what you need to start smashing your fitness goals!
          Don't be shy - Our team of experts are available seven days a week through email,
          live chat or over the phone. We're ready to help you find the information you need to start living a fit and healthy lifestyle.
        </p>
        <div>
          <div className={c.contactDetails}>
            <h1>contact info</h1>
            <div>
              <h1>
                map
              </h1>
            </div>
          </div>
          <div>
            <h1>form to contact</h1>
          </div>
        </div>
      </container>

    </div>
  )
}
