
import React from "react";
import styles from "./form.module.css";
function Form({ handleHide,town }) {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.entry}>
          <div className={styles.box}>
            <div className={styles.head}>
              <h1>Details Form</h1>
            </div>
            <div className={styles.details}>
              <input type="text" name="" id="" placeholder="full name" />
              <input type="number" name="" id="" min="0" placeholder="age" />
              <input type="text" name="state" id="" placeholder="state" />
              <input type="text" name="city" id="" placeholder={town} />
              <input type="tel" name="" id="" placeholder="phone number" />
              <input type="email" name="" id="" placeholder="gmail" />
              <input type="text" name="" id="" placeholder="service" />
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="message (optional)"
              ></textarea>
              <label for="remember">
                remeber me
                <input
                  type="checkbox"
                  className={styles.check}
                  id="remember"
                  name="remember"
                  value="yes"
                />
              </label>
            </div>
            <div className={styles.submit}>
              <div className={styles.terms}>
                <p>
                  by creating account you agree to our
                  <span>
                    <a href=""> terms&conditions</a>
                  </span>
                </p>
              </div>
              <button onClick={handleHide}>submit</button>
            </div>
          </div>
          <div className={styles.caption}>
            <h1>relax!! we will reach you</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;