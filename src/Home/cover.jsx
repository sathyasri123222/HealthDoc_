import React from "react";
import styles from "./home.module.css";
import { useState, useEffect, useRef } from "react";
import Location from "./location";
import Form from "../Entry/form";
import background from "./background_image_data";

function Cover() {
  const [showForm, setShowForm] = useState(false);
  const back_CoverRef = useRef(null);
  const [text, setText] = useState(0);
  const courser_ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
        back_CoverRef.current.classList.add(styles.slideIn);
      }
    };

    setB();
    back_CoverRef.current.classList.remove(styles.slideIn);
    const interval = setInterval(setB, 5000);
    return () => clearInterval(interval);
  }, []);

  const get_randombackground = () => {
    const index = Math.floor(Math.random() * background.length);
    setText(index);
    return index;
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHide = () => {
    setShowForm(false);
  };

  return (
    <div>
      <div className={styles.cover}>
        <div className={styles.cover_text}>
          <Location location={handleShowForm} />
          <div className={styles.coverContent}>
            <div className={styles.healthTime}>
              <h1>WELCOME TO Health Time</h1>
              <h2>Your Health, Our Priority </h2>
              <h3>
                Connecting you with top healthcare professionals anytime,
                anywhere.
              </h3>
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
                <p>
                  read more 
                </p>
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
                <p>
                  read more 
                </p>
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
                <p>
                  read more 
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.cover_image} ref={back_CoverRef}>
          <div className={styles.cover_headtext}>
            <h1 className={styles.cover_heading} ref={courser_ref}>
              {background[text].content}
            </h1>
          </div>
        </div>
      </div>
      {showForm && <Form handleHide={handleHide} />}
    </div>
  );
}

export default Cover;
