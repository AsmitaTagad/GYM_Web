import React from 'react';
import f from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={f.footer}>
        <div className={f.about}>
          <h1>GYM</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <i
            class="fa fa-facebook"
            style={{ fontSize: '46px', color: 'red' }}
          ></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
        </div>
        <div className={f.List}>
          <span>Healithy Living</span>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className={f.service}>
          <span>Services</span>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div className={f.program}>
          <span>Programms</span>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <hr />
      </div>

      <div className={f.par}>
        <p>@2023 all rights reserved</p>
      </div>
    </>
  );
}

