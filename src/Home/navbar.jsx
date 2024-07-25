import React from "react";
import styles from "./home.module.css";

function Navbar() {
  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        <img
          src="https://nav.practo.com/9.5.14/consumer/images/practo.svg"
          alt=""
        />
      </div>
      <div className={styles.service}>
        <button>Services</button>
        <button>my health</button>
        <button>video consultation</button>
        <button>About us</button>
      </div>
      <div className={styles.login}>
        <button>login/signup</button>
        <button>
          help 
        </button>
        <button className={styles.lang}>DE</button>
      </div>
    </div>
  );
}

export default Navbar;
