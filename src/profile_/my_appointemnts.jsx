import React from "react";
import styles from "./profile.module.css";
import Doc_data from "../doctors/doctor_data";
import { useState, useEffect, useRef } from "react";
import appoint_data from "./appoint_data";
import { GoClockFill } from "react-icons/go";
function Myappointments() {
  const [appointments, setappointments] = useState(appoint_data);
  const stat = useRef([]);

  useEffect(() => {
    console.log(appointments);
    Col();
  }, [appointments]);

  function Col() {
    stat.current.forEach((ref, index) => {
      if (ref) {
        const statusText = ref.textContent;
        if (statusText === "pending") {
          ref.style.backgroundColor = `yellow`;
          ref.style.color = "black";
        } else if (statusText === "completed") {
          ref.style.backgroundColor = "green";
        } else if (statusText === "cancelled") {
          ref.style.backgroundColor = "red";
        }
      }
    });
  }

  return (
    <div className={styles.myappoint}>
      <h1>2024</h1>

      {appointments.map((doc, index) => {
        return (
          <div className={styles.times}>
            <div className={styles.datebox}>
              <h1>{doc.date[0]}</h1>
              <h3>{doc.date[1]}</h3>
            </div>
            <div className={styles.apbox}>
              <div className={styles.det}>
                <h4>{doc.name}</h4>
                <p>{doc.spec}</p>
                <p>{doc.hospital}</p>
              </div>
              <div className={styles.status}>
                <p ref={(el) => (stat.current[index] = el)}>{doc.status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Myappointments;
