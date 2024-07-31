import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { IoIosLogIn } from "react-icons/io";

function Log_navbar() {
  return (
    <div className={styles.login_navbar} id="navbar">
      <div className={styles.logo} id="logo">
        <img src="./assets/seth.jpg" alt="" />
      </div>
      <div className={styles.login_service}>
        <button>video consultation</button>
        <button>medicines</button>
        <button>lab tests</button>
        <button>doctor chat</button>
        <button>surgeries</button>
      </div>
      <div className={styles.profile_Block}>
        <Link to="/HealthDoc_/login">
          <HiUser />
          profile
        </Link>
        <Link className={styles.lang} to="/HealthDoc_/login">
          log out <IoIosLogIn />
        </Link>
      </div>
    </div>
  );
}

export default Log_navbar;
