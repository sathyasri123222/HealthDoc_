
import styles from "../payment.module.css";
import phonepay from "./phonepay.jpg";
import { useNavigate } from "react-router-dom";

function Phone() {
  const nav = useNavigate();

  function bima(event) 
  {
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
          <img src={phonepay} alt=" " />
        </div>
        <div className={styles.bhim_form}>
          <div className={styles.bhim_input}>
            <label>
              <input type="file" name="payment screenshot" id="" required />
            </label>
          </div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </>
  );
}

export default Phone;
