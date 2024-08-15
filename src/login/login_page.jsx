import React from "react";
import Navbar from "../Home/navbar";
import styles from "./login.module.css";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  function handlelog(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      navigate("/HealthDoc_/doctor");
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
                <NavLink
                  to="/HealthDoc_/login"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/HealthDoc_/signup"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  Signup
                </NavLink>
              </div>
              <div className={styles.inputform}>
                <form action="" className={styles.form} onSubmit={handlelog}>
                  <div className={styles.userbox}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      placeholder="username"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.userbox}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" required />
                  </div>
                  <div className={styles.remember}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div>
                    <Link className={styles.forgot}> forgot password?</Link>
                  </div>
                  <input
                    type="submit"
                    value="Login"
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

export default Login;
