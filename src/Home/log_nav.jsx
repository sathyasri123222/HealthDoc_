import React, { useState } from "react";
import styles from "./home.module.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { IoIosLogIn } from "react-icons/io";
import img from "../assets/seth.jpg";
import { FaCartPlus } from "react-icons/fa";

function Log_navbar() {
  const [cart, setCart] = useState(1);

  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className={styles.login_navbar} id="navbar">
        <NavLink to="/HealthDoc_/" className={styles.logo} id="logo">
          <img src={img} alt="" />
        </NavLink>
        <div className={styles.login_service}>
          <NavLink
            to="vedio"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            vedio consultation
          </NavLink>
          <NavLink
            to="medicines"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            medicines
          </NavLink>
          <NavLink
            to="labtest"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            lab tests
          </NavLink>
          <NavLink
            to="myhealth"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            my health
          </NavLink>
          <NavLink
            to="chat"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            doctor chat
          </NavLink>
          <NavLink
            to="surgeries"
            className={({ isActive }) => (isActive ? styles.ractive : "")}
          >
            surgeries
          </NavLink>
          <NavLink to="emergency" className={styles.emergency}>
            emergency
          </NavLink>
        </div>
        <div className={styles.profile_Block}>
          <NavLink
            to="/HealthDoc_/doctor/Myprofile"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <HiUser />
            profile
          </NavLink>
          <NavLink to="/HealthDoc_/doctor/Myprofile/medicines">
            <FaCartPlus />
            {cart>0&&<span className={styles.cart_count}>{cart}</span>}
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
