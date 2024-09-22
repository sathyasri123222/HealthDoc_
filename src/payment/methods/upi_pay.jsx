import styles from "../payment.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import bhim from "./bhim.png";
function Upi() {
  const nav = useNavigate();
  function bima(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      alert("your payment is under process");
      nav("/HealthDoc_/doctor/Myprofile");
    } else {
      event.target.reportValidity();
    }
  }
  return (
    <>
      <form className={styles.bhim_upi} onSubmit={bima}>
        <div className={styles.bhim_imge}>
          <img src={bhim} alt="" />
        </div>
        <div className={styles.bhim_form}>
          <div className={styles.bhim_input}>
            <label htmlFor="">
              <input type="file" name="payment screenshot" id="" required />
            </label>
          </div>
          <button>Upload</button>
        </div>
      </form>
    </>
  );
}
export default Upi;
