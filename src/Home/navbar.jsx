import React,  { useState } from 'react';
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import img from "../assets/seth.jpg";
import { VscPercentage } from "react-icons/vsc";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className={styles.navbar} id="navbar">
      <div className={styles.logo} id="logo">
        <img src={img} alt="Logo" />
      </div>
      <div className={styles.service}>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.dropdownContainer}
        >
          <button className={styles.servicesButton}>
            Services <span className={isDropdownVisible ? styles.arrowUp : styles.arrowDown}></span>
          </button>
          {isDropdownVisible && (
            <div className={styles.dropdown}>
              <ul>
                <li>Home Care</li>
                <li>Second Opinion</li>
                <li>Video Consultation</li>
                <li>Emergency Care</li>
                <li>Lab Test</li>
                <li>Pharmacy</li>
              </ul>
            </div>
          )}
        </div>
        <button>
          offers <VscPercentage />
        </button>
        <button>video consultation</button>
        <button>About us</button>
        <button>
          help <BsFillPatchQuestionFill />
        </button>
      </div>
      <div className={styles.login}>
        <Link to="/HealthDoc_/login">Login/signup</Link>
        <Link className={styles.lang}>EN</Link>
      </div>
    </div>
  );
};

export default Navbar;