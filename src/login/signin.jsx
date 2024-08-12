import React, { useEffect, useRef } from "react";
import Navbar from "../Home/navbar";
import styles from "./login.module.css";
import { NavLink } from "react-router-dom";

function Signup() {

  function handlelog(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      navigate("/HealthDoc_/signup");
    } else {
      event.target.reportValidity();
    }
  }

  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login}>
          <div className={styles.image}></div>
          <div className={styles.regform}>
            <div className={styles.l_form}>
              <div className={styles.signup}>
                <NavLink to="/HealthDoc_/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
                <NavLink to="/HealthDoc_/signup" className={({ isActive }) => (isActive ? styles.active : "")}>
                  Signup
                </NavLink>
              </div>
              <div className={styles.inputform}>
                <form action="" className={styles.form} onSubmit={handlelog}>
                  <div className={styles.userbox}>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      placeholder="username"
                      id="username"
                      autoComplete="username"
                      required
                    />
                  </div>
                  <div className={styles.mailbox}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      id="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className={styles.userbox}>
                    <label htmlFor="password">new Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      id="password"
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="get otp"
                    className={styles.loginbtn}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
