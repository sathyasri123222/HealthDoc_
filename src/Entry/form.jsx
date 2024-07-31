import React from "react";
import styles from "./form.module.css";
import Navbar from "../Home/navbar";
import { Link, useNavigate } from "react-router-dom";
function Form() {
  const navigate = useNavigate();

  function handlelog(event) {
    event.preventDefault();

    if (event.target.checkValidity()) {
      navigate("/HealthDoc_/signup");
    } else {
      event.target.reportValidity();
    }
  }
  return (
    <>
      <Navbar />
      <div className={styles.form}>
        <div className={styles.entry}>
          <form className={styles.box} onSubmit={handlelog}>
            <div className={styles.head}>
              <h1>Details Form</h1>
            </div>
            <div className={styles.details}>
              <input
                type="text"
                name="full name "
                id=""
                placeholder="full name"
                required
              />
              <input
                type="number"
                name="age"
                id=""
                min="0"
                placeholder="age"
                required
              />
              <input
                type="text"
                name="state"
                id=""
                placeholder="state"
                required
              />
              <input
                type="text"
                name="city"
                id=""
                placeholder="town/city"
                required
              />
              <input
                type="tel"
                name="mobile"
                id=""
                placeholder="phone number"
                required
              />
              <input
                type="email"
                className={styles.email}
                name="mail"
                id=""
                placeholder="gmail"
                required
              />
              <input type="text" name="" id="" placeholder="service" />
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="message (optional)"
              ></textarea>
              <label for="remember">
                <input
                  type="checkbox"
                  className={styles.check}
                  id="remember"
                  name="remember"
                  value="yes"
                  autoComplete="email"
                />
                remeber me
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

              <input type="submit" className={styles.submit_btn} />
            </div>
          </form>
          <div className={styles.caption}>
            <h1>relax!! we will reach you</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
