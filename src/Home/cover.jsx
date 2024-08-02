import React from "react";
import styles from "./home.module.css";
import { useState, useEffect, useRef } from "react";
import Location from "./location";
import Form from "../Entry/form";
import background from "./background_image_data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

function Cover() {
  const back_CoverRef = useRef(null);
  const courser_ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lastindex, setn] = useState(0);

  useEffect(() => {
    const setB = () => {
      const number = get_randombackground();
      if (back_CoverRef.current) {
        back_CoverRef.current.classList.remove(styles.slideIn);
        courser_ref.current.classList.remove(styles.slide_head);
        void back_CoverRef.current.offsetWidth;
        void courser_ref.current.offsetWidth;
        courser_ref.current.classList.add(styles.slide_head);
        back_CoverRef.current.style.backgroundImage = `url(${background[number].image})`;
      }
    };

    setB();
    back_CoverRef.current.classList.remove(styles.slideIn);
    const interval = setInterval(setB, 5000);
    return () => clearInterval(interval);
  }, []);

  const get_randombackground = () => {
    let new_index;
    do {
      new_index = Math.floor(Math.random() * background.length);
    } while (new_index === lastindex);
    setn(new_index);
    return new_index;
  };


  return (
    <div>
      <div className={styles.cover}>
        <div className={styles.cover_text}>
          <Location />
          <div className={styles.coverContent}>
            <div className={styles.healthTime}>
              <h1>WELCOME TO Health Time</h1>
              <h2>Your Health, Our Priority </h2>
              <h3>
                Connecting you with top healthcare professionals anytime,
                anywhere
              </h3>
              <div className={styles.whyus}>
                <h1>why us?</h1>
                <ul className={styles.whyus_list}>
                  <li>Wide Range of Specialists</li>
                  <li>24/7 service round the clock</li>
                  <li>emergency patient support</li>
                  <li>100% Confidentiality in medical reports</li>
                  <li> Efficient Follow-Up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cover_templates}>
          <div
            className={`${styles.blog} ${styles.blog1}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h3>health blogs</h3>
            {isHovered && (
              <div className={styles.read_more}>
                <p>read more</p>
              </div>
            )}
          </div>
          <div
            className={`${styles.blog} ${styles.blog2}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h3>medical news</h3>
            {isHovered && (
              <div className={styles.read_more}>
                <p>read more</p>
              </div>
            )}
          </div>
          <div
            className={`${styles.blog} ${styles.blog3}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h3>stay healthy?</h3>
            {isHovered && (
              <div className={styles.read_more}>
                <p>read more</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.cover_image}>
          <div ref={back_CoverRef} className={styles.back_Cover}>
            <div className={styles.cover_headtext}>
              <h1 className={styles.cover_heading} ref={courser_ref}>
                {background[lastindex].content}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
