import React from "react";
import styles from "./home.module.css";
import { Link,NavLink, Outlet } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { IoIosLogIn } from "react-icons/io";
import img from "../assets/seth.jpg";

function Log_navbar() {
  return (
    <>
      <div className={styles.login_navbar} id="navbar">
        <div className={styles.logo} id="logo">
          <img src={img} alt="" />
        </div>
        <div className={styles.login_service}>
          <button>video consultation</button>
          <button>medicines</button>
          <button>lab tests</button>
          <button>my health</button>
          <button>doctor chat</button>
          <button>surgeries</button>
        </div>
        <div className={styles.profile_Block}>
          <NavLink to="/HealthDoc_/login" className={({ isActive }) => (isActive ? styles.active : "")}>
            <HiUser />
            profile
          </NavLink>
          <Link className={styles.lang} to="/HealthDoc_/login">
            log out <IoIosLogIn />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Log_navbar;
