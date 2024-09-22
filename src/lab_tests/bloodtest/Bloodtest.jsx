import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./blood.module.css";
import Blood_data from "./blood_data";
import { FaRupeeSign } from "react-icons/fa";

function Blood() {
  const [blood, setblood] = useState(Blood_data);
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <>
      <div className={styles.mainbox}>
        <div className={styles.main}>
          {blood.map((data, index) => {
            return (
              <>
                <div className={styles.one_box}>
                  <div className={styles.bigbox}>
                    <div className={styles.imgbox}>
                      <img src={data.img} alt="" />
                    </div>
                    <div className={styles.informate}>
                      <h4 className={styles.h4}>{data.lab_name}</h4>
                      <h4>opens: {data.timings}</h4>
                      <h4>{data.address}</h4>
                    </div>
                  </div>
                  <div className={styles.informate_fee}>
                    <h4>type: {data.name}</h4>
                    <h4>
                      <FaRupeeSign />
                      {data.consultation_fee}
                    </h4>
                    <NavLink
                      to={`/HealthDoc_/doctor/${params.town}/${params.test}/${data.id}`}
                    >
                      Book test
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blood;
