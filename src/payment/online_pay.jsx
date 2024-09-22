import styles from "./payment.module.css";
import { Outlet, NavLink, useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function OnlinePayment() {
  const navg = useNavigate();
  const par = useParams();

  function ng() {
    navg(`/HealthDoc_/doctor/bookappointment/${par.id}/payment`);
  }

  return (
    <div>
      <div className={styles.paynav}>
        <div className={styles.options}>
          <ul>
            <li onClick={ng}>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <IoMdArrowRoundBack /> back to doctor profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Debit/Credit Card
              </NavLink>
            </li>
            <li>
              <NavLink
                to="upi"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                upi
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                paytm postpaid and wallet
              </NavLink>
            </li>
            <li>
              <NavLink
                to="gpay"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                google Pay
              </NavLink>
            </li>
            <li>
              <NavLink
                to="amazon"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                amazon Pay
              </NavLink>
            </li>
            <li>
              <NavLink
                to="phone"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                phone Pay
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                net banking
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Pay later
              </NavLink>
            </li>
            <li>
              <NavLink
                to=""
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                others
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.acess}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default OnlinePayment;
