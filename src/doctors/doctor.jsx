import React, { useEffect } from "react";
import Navbar from "../Home/navbar";
import styles from "./doc.module.css";
import Log_navbar from "../Home/log_nav";
import { Link } from "react-router-dom";
import Doc_data from "./doctor_data";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
function Doctor() {
  const [T_data, setT] = useState(Doc_data);

  useEffect(() => {
   
  }, []);
  return (
    <div>
      <Log_navbar />
      <div className={styles.filterbar}>
        <h2>{T_data.length} doctors avaliable in your locality</h2>
        <p>
          <MdVerified className={styles.doc_verified} /> all verified by Health
          doc
        </p>
      </div>
      <div className={styles.doctorsList}>
        <div className={styles.doc_box}>
          {T_data.map((doc, index) => {
            return (
              <>
                <div className={styles.appointment}>
                  <div className={styles.one_doc_box}>
                    <div className={styles.doc_img}>
                      <img src={doc.img} alt="" />
                    </div>
                    <div className={styles.doc_info}>
                      <p className={styles.doc_name}>{doc.name}</p>
                      <p className={styles.doc_spec}>
                        {doc.spec}
                        <LuDot />
                        {doc.hospital}
                        <MdVerified className={styles.doc_verified} />
                      </p>
                      <p className={styles.doc_ex}>
                        {doc.experience} of experience
                      </p>
                      <p className={styles.doc_adress}>{doc.adress}</p>
                      <p className={styles.doc_consultation_fee}>
                        <FaRupeeSign />
                        {doc.consultation_fee} consultation fee at clinic
                      </p>
                      <p className={styles.doc_exp}>
                        {doc.rating}
                        <MdOutlineStar />
                      </p>
                    </div>
                  </div>
                  <div className={styles.appointment_doc}>
                    <Link to="/bookappointment">
                      <button>Book Appointment</button>
                    </Link>
                    <Link to="/bookappointment">
                      <button className={styles.videocall}>
                        video call <FaVideo />
                      </button>
                    </Link>

                    <Link to="/profile">
                      <button>View profile</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.filterbox}></div>
      </div>
    </div>
  );
}

export default Doctor;
