import React from "react";
import styles from "./appoint_styles.module.css";
import r_data from "./review_data";
function Reviews_table() {
  return (
    <>
      <div className={styles.reviews_table}>
        {r_data.map((re, index) => {
          return (
            <>
              <div className={styles.one_rev}>
                <div className={styles.img_rev}>
                  <img src={re.image} alt="" />
                </div>
                <div className={styles.informate_rev}>
                  <h3>{re.patient_name}</h3>
                  <p>{re.review}</p>
                  <h4>patient review: {re.exp}</h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Reviews_table;
