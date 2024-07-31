import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        <img
          src="./assets/seth.jpg"
          alt=""
        />
      </div>
      <div className={styles.service}>
        <button>Services</button>
        <button>my health</button>
        <button>video consultation</button>
        <button>About us</button>
        <button>help</button>
      </div>
      <div className={styles.login}>
        <Link to="/HealthDoc_/login">Login/signup</Link>
        <Link className={styles.lang}>EN</Link>
      </div>
    </div>
  );
}

export default Navbar;
