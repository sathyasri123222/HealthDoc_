import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./lab.module.css";
import Test_Locate from "./test_locate";
import { MdOutlineQuestionMark } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import th from "../assets/tr1.jpeg";
import dia from "../assets/dia.jpg";
import skin from "../assets/skin.jpeg";
import stomach from "../assets/stomach.jpeg";
import cancer from "../assets/cancer.jpg";
import heart from "../assets/heart.jpeg";
function Lab_test() {
  const day_ref = useRef(null);
  const scrollPercentage = (percentage) => {
    if (day_ref.current) {
      const containerWidth = day_ref.current.scrollWidth;
      const visibleWidth = day_ref.current.clientWidth;
      const scrollableWidth = containerWidth - visibleWidth;
      const scrollDistance = (scrollableWidth * percentage) / 100;

      day_ref.current.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    scrollPercentage(50);
  };

  const prev = () => {
    scrollPercentage(-50);
  };

  return (
    <>
      <div className={styles.offers}>
         <Test_Locate />
        <div className={styles.poster}>
          <div className={styles.box1}>
            <h3>limited offer</h3>
          </div>
          <div className={styles.box2}>
            <h1>annual family health checkup @3999</h1>
            <ul>
              <li>your family health in your hands</li>
              <li>an yearly plan with no extra charges</li>
              <li>personal health exprets</li>
            </ul>
            <div className={styles.btn}>
              <NavLink>get plan </NavLink>
            </div>
          </div>
        </div>
        <div className={styles.call}>
          <div className={styles.callbox}></div>
          <div className={styles.experts}>
            <h3>
              need help with booking <MdOutlineQuestionMark />
            </h3>
            <p>our experts are here to help</p>
          </div>
          <div className={styles.numb}>
            <h3>
              <IoCall />
            </h3>
            <p>+91-734-56-7890</p>
          </div>
        </div>
        <div className={styles.scrollbox}>
          <div className={styles.move} onClick={prev}>
            <p>
              <MdArrowCircleLeft />
            </p>
          </div>
          <div ref={day_ref} className={styles.scroll}>
            <div className={styles.scroll1}>
              <div className={styles.card}>
                <h2>Thyroid test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  400
                </h3>
              </div>
              <div className={styles.card}>
                <h2>blood test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  330
                </h3>
              </div>
              <div className={styles.card}>
                <h2>lipid profile</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  240
                </h3>
              </div>
              <div className={styles.card}>
                <h2>vitamin b12</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
            </div>
            <div className={styles.scroll2}>
              <div className={styles.card}>
                <h2>liver function test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
              <div className={styles.card}>
                <h2>full body checkup</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  1700
                </h3>
              </div>
              <div className={styles.card}>
                <h2>Diabetes test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  400
                </h3>
              </div>
              <div className={styles.card}>
                <h2>eye checkup</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  100
                </h3>
              </div>
            </div>
            <div className={styles.scroll3}>
              <div className={styles.card}>
                <h2>protien test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
              <div className={styles.card}>
                <h2>hairloss test</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
              <div className={styles.card}>
                <h2>vitamin b12</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
              <div className={styles.card}>
                <h2>vitamin b12</h2>
                <p>known as thyroid profile blood test determines thyroid </p>
                <h3>
                  <FaIndianRupeeSign />
                  600
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.move} onClick={next}>
            <p>
              <MdArrowCircleRight />
            </p>
          </div>
        </div>
        <div className={styles.con_head}>
          <h2>find tests by problem</h2>
          <div className={styles.concern}>
            <div className={styles.issue}>
              <img src={th} alt="" />
              <h3>thyroid</h3>
            </div>
            <div className={styles.issue}>
              <img src={dia} alt="" />
              <h3>diabetes</h3>
            </div>
            <div className={styles.issue}>
              <img src={skin} alt="" />
              <h3>skin</h3>
            </div>
            <div className={styles.issue}>
              <img src={stomach} alt="" />
              <h3>digestion</h3>
            </div>
            <div className={styles.issue}>
              <img src={heart} alt="" />
              <h3>blood</h3>
            </div>
            <div className={styles.issue}>
              <img src={cancer} alt="" />
              <h3>cancer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lab_test;
