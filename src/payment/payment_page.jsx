import { useEffect, useState, useRef } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Doc_data from "../doctors/doctor_data";
import styles from "./payment.module.css";
import { MdVerified } from "react-icons/md";
import { FaRegHospital } from "react-icons/fa";
import { BsPinMap } from "react-icons/bs";

function Payment() {
  const par = useParams();
  const navg = useNavigate();
  const [doctor_profile, setDoctor_profile] = useState({});
  const det_Ref = useRef(null);
  const [count, SetCount] = useState(0);

  function handleClick() {
    det_Ref.current.style.display = "block";
  }

  function handleClose() {
    det_Ref.current.style.display = "none";
  }

  function Fter(num) {
    SetCount(num);
  }

  function online(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      if (count == 1) {
        navg(`/HealthDoc_/doctor/OnlinePayment/${par.id}`);
      } else {
        navg(`/HealthDoc_/doctor/Myprofile`);
      }
    } else {
      event.target.reportValidity();
    }
  }

  useEffect(() => {
    document.title = "Payment page";
    console.log(par.id);
    setDoctor_profile(Doc_data[par.id - 1]);
    handleClose();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <h3>date and sepcification</h3>
          </div>
          {doctor_profile ? (
            <div className={styles.profile}>
              <div className={styles.image}>
                <img src={doctor_profile.img} alt="" />
              </div>
              <div className={styles.profile_info}>
                <h3>{doctor_profile.name}</h3>
                <div className={styles.doc_spec}>
                  <p>{doctor_profile.education}</p>
                </div>
                <h4>
                  experience of {doctor_profile.experience} as{" "}
                  {doctor_profile.spec}
                </h4>
              </div>
            </div>
          ) : (
            <>loading </>
          )}
          <div className={styles.hospital}>
            <div className={styles.h_icon}>
              <p>
                <FaRegHospital />
              </p>
            </div>
            <div className={styles.adress}>
              <p>{doctor_profile.hospital}</p>
              <p>{doctor_profile.address}</p>
              <p>
                <NavLink to={"./#"}>
                  get directions
                  <BsPinMap />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.cont} onSubmit={online}>
            <h2>patient details</h2>
            <div className={styles.patient}>
              <h4>this clinic vist appointment for:- </h4>
              <label onClick={() => handleClose()}>
                <input type="radio" value="option1" name="select" required />
                surya dammalapa
              </label>
              <label
                onClick={() => {
                  handleClick();
                }}
              >
                <input type="radio" value="option2" name="select" />
                others
              </label>
            </div>
            <div className={styles.p_details} ref={det_Ref}>
              <h4>please provide details about the patient:-</h4>
              <label className={styles.d_label}>
                Full name:-
                <input type="text" placeholder="full name" />
              </label>
              <label className={styles.d_label}>
                Age:-
                <input type="number" />
              </label>
              <label className={styles.d_label}>
                Phone number:-
                <input type="mobile" placeholder="0000 000000" />
              </label>
              <label className={styles.d_label}>
                Email:-
                <input type="text" placeholder="@gmail.com (optional)" />
              </label>
            </div>
            <div className={styles.online}>
              <h4>choose option to book appointment </h4>
              <label onClick={() => Fter(1)}>
                <input type="radio" value="online" name="payment" required />
                pay online ({doctor_profile.consultation_fee})
              </label>
              <label onClick={() => Fter(0)}>
                <input type="radio" value="clinic" name="payment" />
                pay at vist ({doctor_profile.consultation_fee})
              </label>
              <button className={styles.book} type="submit">
                book clinic vist
              </button>
            </div>
            <div className={styles.terms}>
              <p>
                by booking appointment you are accepting our terms and
                conditions
                <NavLink
                  to="/HealthDoc_/terms"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  terms and conditions
                </NavLink>{" "}
                you can read our payment FAq
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Payment;
