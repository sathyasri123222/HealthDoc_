import styles from "./payment.module.css";
import visa from "../assets/images.png";
import mcard from "../assets/mcard.png";
import paypal from "../assets/paypal.png";
import rupay from "../assets/rupay.png";
import upi from "../assets/UPI-Logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Pay() {
  const navigates = useNavigate();
  function CreditCard(event) {
    event.preventDefault();
    if (event.target.checkValidity()) {
      alert("payment successfull");
      navigates("/HealthDoc_/doctor/Myprofile");
    } else {
      event.target.reportValidity();
    }
  }
  return (
    <>
      <form className={styles.creditcard} onSubmit={CreditCard}>
        <div className={styles.cardbox}>
          <div className={styles.cv}>
            <label>
              Card Number :-
              <input
                type="tel"
                name=""
                id=""
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength={16}
                required
              />
            </label>
            <label>
              Card Holder Name :-
              <input
                type="tel"
                name=""
                id=""
                placeholder="eg:- dammalapa surya"
                required
              />
            </label>
            <div className={styles.logo}>
              <label for="">
                valid upto:-
                <input type="date" name="" id="" required />
              </label>
              <label for="cvv">
                CVV:-
                <input
                  type="text"
                  name="cvv"
                  id=""
                  placeholder="CVV"
                  maxLength={3}
                  required
                />
              </label>
              <label>
                <img src={mcard} alt="" />
              </label>
            </div>
          </div>
          <div className={styles.transactions}>
            <div className={styles.clogo}>
              your transactions are 100% safe with us
              <div className={styles.logic}>
                <img src={mcard} alt="" />
                <img src={rupay} alt="" />
                <img src={visa} alt="" />
                <img src={paypal} alt="" />
                <img src={upi} alt="" />
              </div>
              <label>
                <input type="checkbox" name="" id="" /> remember your details
                are safe(Cvv will not be saved)
              </label>
              <button type="submit">pay now</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Pay;
