import styles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Profile() {
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.nave_bar}>
          <div className={styles.options}>
            <ul>
              <li>
                <NavLink
                  to="appointments"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  appointments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="medicalrecords"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  medical records
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="LabReports"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  lab tests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="medicines"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  medicine orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="consultation"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  online consultation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="articles"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="feedback"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  feedback
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="mypayments"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  payments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  others
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.output}>
          <Outlet />
        </div>
        <div className={styles.profile_right}>
          <div className={styles.img_box}>
            <h2>tarun basckar</h2>
          </div>
          <div className={styles.details}>
            <p>ph no: +91-876656789</p>
            <p>email: tarun_writes@gmail.com</p>
            <p>address: valavoor kottayam</p>
          </div>
          <form className={styles.back}>
            <h4>add medical reports</h4>
            <label for="file">
              upload
              <input type="file" name="file" required />
            </label>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
