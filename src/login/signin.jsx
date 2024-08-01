import React, { useEffect, useRef } from "react";
import Navbar from "../Home/navbar";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Signup() {
  const bottom = useRef(null);


  function handlelog(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      navigate("/HealthDoc_/signup");
    } else {
      event.target.reportValidity();
    }
  }

  useEffect(() => {
    bottom.current.style.borderBottom = "4px solid #023e8a";
    bottom.current.style.borderRadius = "0.2em";
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.login_container}>
        <div className={styles.login}>
          <div className={styles.image}></div>
          <div className={styles.regform}>
            <div className={styles.l_form}>
              <div className={styles.signup}>
                <Link to="/HealthDoc_/login">Login</Link>
                <Link to="/HealthDoc_/signup" ref={bottom}>
                  Signup
                </Link>
              </div>
              <div className={styles.inputform}>
                <form action="" className={styles.form} onSubmit={handlelog}>
                  <div className={styles.userbox}>
                    <label htmlFor="username">full name</label>
                    <input
                      type="text"
                      placeholder="username"
                      id="username"
                      required
                    />
                  </div>
                  <div className={styles.mailbox}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      id="email"
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
                  <Link to="/HealthDoc_/doctor" className={styles.linker}>
                    <input
                      type="submit"
                      value="get otp"
                      className={styles.loginbtn}
                    />
                  </Link>
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
