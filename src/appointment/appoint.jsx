import React from "react";
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Doc_data from "../doctors/doctor_data";
import styles from "./appoint_styles.module.css";
import { MdVerified } from "react-icons/md";

function Book() {
  const params = useParams();
  const [doctor_profile, setDoctor_profile] = useState({});

  useEffect(() => {
    setDoctor_profile(Doc_data[params.id - 1]);
  }, []);

  return (
    <>
      <div>
        {doctor_profile ? (
          <div className={styles.profile}>
            <div className={styles.profile_imgbox}>
              <div className={styles.image}>
                <img src={doctor_profile.img} alt="" />
                <div className={styles.profile_info}>
                  <h2>{doctor_profile.name}</h2>
                  <div className={styles.doc_spec}>
                    <p>{doctor_profile.education}</p>
                  </div>
                  <p>
                    {doctor_profile.hospital}
                    <MdVerified className={styles.doc_verified} />
                  </p>
                  <p>{doctor_profile.address}</p>
                </div>
              </div>
            </div>
            <div className={styles.calendar}>
              <div className={styles.divcalendar}>
                <div className={styles.navbar}>
                  <NavLink
                    to={`/HealthDoc_/doctor/bookappointment/${params.id}`}
                    end
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    Calendar
                  </NavLink>
                  <NavLink
                    to={`/HealthDoc_/doctor/bookappointment/${params.id}/time_table`}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    vedio call
                  </NavLink>
                  <NavLink
                    to={`/HealthDoc_/doctor/bookappointment/${params.id}/reviews`}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                  >
                    Reviews
                  </NavLink>
                </div>
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    </>
  );
}

export default Book;
