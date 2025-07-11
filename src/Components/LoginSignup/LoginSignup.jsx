import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../../Assets/user_16x16.png";
import password_icon from "../../Assets/password_16x16.png";
import email_icon from "../../Assets/email_16x16.png";

const LoginSignup = () => {
const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <header></header>

      <form>
        <h2>{ action }</h2>

        <div className="inputs">
          <div className="input">
            <label htmlFor="username">
              <img src={user_icon} alt="User icon" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
              />
            </label>
          </div>

          <div className="input">
            <label htmlFor="email">
              <img src={email_icon} alt="Email icon" />
              <input type="email" id="email" name="email" placeholder="Email" />
            </label>
          </div>

          <div className="input">
            <label htmlFor="password">
              <img src={password_icon} alt="Password icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </label>
          </div>
        </div>

        <button type="submit" className={
          action === "Login" ? "btn btn-gray" : "btn"
          } onClick={() => {
            setAction("Sign Up")
          }}>
          Sign up
        </button>
        <button type="submit" className={
          action === "Sign Up" ? "btn btn-gray" : "btn"
          } onClick={() => {
            setAction("Log In")
          }}>
          Log in
        </button>

        <section className="forgot-password">Forgot your Password?</section>
      </form>
    </div>
  );
};

export default LoginSignup;
