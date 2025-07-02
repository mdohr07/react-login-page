import React from 'react'
import './LoginSignup.css'

import user_icon from './Assets/user_16x16.png'
import password_icon from './Assets/password_16x16.png'
import email_icon from './Assets/email_16x16.png'

const LoginSignup = () => {
  return (
    <div className="container">
      <header>Header</header>
      <div className="text">Sign up</div>

      <div className="inputs">
        <section className="input">
          <img src={user_icon} alt="" />
          <input type="text" name="" id="" />
        </section>

        <section className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="" id="" />
        </section>

        <section className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="" id="" />
        </section>
      </div>
      
      </div>
  )
}

export default LoginSignup