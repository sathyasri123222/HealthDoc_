import styles from "../payment.module.css";
import gpay from "./gpay.jpg";
import { useNavigate } from "react-router-dom";

function Gpay() {
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
          <img src={gpay} alt="" />
        </div>
        <div className={styles.bhim_form}>
          <div className={styles.bhim_input}>
            <label>
              <input type="file" name="payment screenshot" id="" required />
            </label>
          </div>
          <button>Upload</button>
        </div>
      </form>
    </>
  );
}

export default Gpay;
