import React from "react";
import styles from "./home.module.css";
import { Link,NavLink,Outlet} from "react-router-dom";
import img from "../assets/seth.jpg";
import { VscPercentage } from "react-icons/vsc";
import { BsFillPatchQuestionFill } from "react-icons/bs";

function Navbar() {
  return (
    <>
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        <img src={img} alt="" />
      </div>
      <div className={styles.service}>
        <button>Services</button>
        <button>
          offers<VscPercentage />
        </button>
        <button>video consultation</button>
        <button>About us</button>
        <button>
          help <BsFillPatchQuestionFill />
        </button>
      </div>
      <div className={styles.login}>
        <NavLink to="/HealthDoc_/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login/signup</NavLink>
        <Link className={styles.lang}>EN</Link>
      </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Navbar;
