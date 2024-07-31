import React from "react";
import Navbar from "../Home/navbar";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Login() {
  const bottom = useRef(null);

  useEffect(() => {
    bottom.current.style.borderBottom = "5px solid #023e8a";
    bottom.current.style.borderRadius="0.2em"
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
                <Link to="/HealthDoc_/login" ref={bottom}>
                  Login
                </Link>
                <Link to="/HealthDoc_/signup">Signup</Link>
              </div>
              <div className={styles.inputform}>
                <form action="" className={styles.form}>
                  <div className={styles.userbox}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="username" />
                  </div>
                  <div className={styles.userbox}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="password" />
                  </div>
                  <div className={styles.remember}>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div>
                    <Link className={styles.forgot}> forgot password?</Link>
                  </div>
                  <Link to="/HealthDoc_/doctors" className={styles.linker}>
                    <input
                      type="submit"
                      value="Login"
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

export default Login;
