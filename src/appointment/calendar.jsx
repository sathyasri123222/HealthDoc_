import styles from "./appoint_styles.module.css";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useRef } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Doc_data from "../doctors/doctor_data";
import { MdOutlineStar } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CiCloudSun } from "react-icons/ci";
import { HiSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import Appoint_times from "./appoint_times";
import { GiH2O } from "react-icons/gi";
function Calendar() {
  const params = useParams();
  const [doctor_profile, setDoctor_profile] = useState({});
  const day_ref = useRef(null);
  const [morning, setMorning] = useState([]);
  const [night, setNight] = useState([]);
  const [afternoon, setAfternoon] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setDoctor_profile(Doc_data[params.id - 1]);
    setMorning(Appoint_times.morning[0]);
    setAfternoon(Appoint_times.afternoon[0]);
    setNight(Appoint_times.night[0]);
  }, []);

  function setTimes(kurg) {
    setMorning(Appoint_times.morning[kurg]);
    setAfternoon(Appoint_times.afternoon[kurg]);
    setNight(Appoint_times.night[kurg]);
    setCheck(true);
  }

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
      <div className={styles.contar}>
        <div className={styles.boxCal}>
          <div className={styles.clinic_vist}>
            <p className={styles.clinic_price}>
              clinic appointemnt at
              <FaIndianRupeeSign /> {doctor_profile.consultation_fee}
            </p>
            <NavLink
              to="/HealthDoc_/doctor/payment"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              book doctor vist
            </NavLink>
          </div>
        </div>
        <div className={styles.book_time}>
          <div className={styles.book_box}>
            <div className={styles.rating_doc}>
              <div className={styles.calinfo}>
                <p>{doctor_profile.spec}</p>
                <p>
                  <BsDot />
                </p>
                <p>{doctor_profile.hospital}</p>
                <p>
                  <BsDot />
                </p>
                <p> {doctor_profile.address}</p>
                <p>
                  <BsDot />
                </p>
                <p>{doctor_profile.name}</p>
                <p className={styles.doc_exp}>
                  {doctor_profile.rating}
                  <MdOutlineStar />
                </p>
              </div>
            </div>
            <div className={styles.days}>
              <div className={styles.weekdays}>
                <p className={styles.wbutton} onClick={prev}>
                  <FaChevronLeft />
                </p>
                <div className={styles.gallery} ref={day_ref}>
                  <div>
                    <span>
                      <button onClick={() => setTimes(0)}>sunday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(1)}>monday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(2)}>tuesday</button>
                    </span>
                  </div>
                  <div>
                    <span>
                      <button onClick={() => setTimes(3)}>wednesday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(4)}>thursday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(5)}>friday</button>
                    </span>
                  </div>
                  <div>
                    <span>
                      <button onClick={() => setTimes(6)}>saturday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(0)}>sunday</button>
                    </span>
                    <span>
                      <button onClick={() => setTimes(1)}>monday</button>
                    </span>
                  </div>
                </div>
                <p className={styles.wbutton} onClick={next}>
                  <FaChevronRight />
                </p>
              </div>
            </div>
            <div className={styles.time}>
              <div className={styles.morining}>
                <div className={styles.part}>
                  <p>
                    morning
                    <CiCloudSun />
                  </p>
                </div>
                <div className={styles.butt}>
                  <div className={styles.fullcover}>
                    {morning ? (
                      morning.map((item) => <button key={item}>{item}</button>)
                    ) : (
                      <h2>loading</h2>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.afternoon}>
                <div className={styles.part}>
                  <p>
                    afternoon
                    <HiSun />
                  </p>
                </div>
                <div className={styles.butt}>
                  <div className={styles.fullcover}>
                    {afternoon ? (
                      afternoon.map((item) => (
                        <button key={item}>{item}</button>
                      ))
                    ) : (
                      <h2>loading</h2>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.night}>
                <div className={styles.part}>
                  <p>
                    evening
                    <RiMoonClearFill />
                  </p>
                </div>
                <div className={styles.butt}>
                  <div className={styles.fullcover}>
                    {night ? (
                      night.map((item) => <button key={item}>{item}</button>)
                    ) : (
                      <h2>loading</h2>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
