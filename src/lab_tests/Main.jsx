import React from "react";
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Blood from "./bloodtest/Bloodtest";
import Sugar from "./sugartest/sugartest";
import styles from "./main.module.css";

function MainTest() {
  const param = useParams();

  useEffect(() => {
    console.log(param);
  });

  const renderTestComponent = (test) => {
    switch (test.toLowerCase()) {
      case "blood_test":
        return <Blood />;
      case "sugar_test":
        return <Sugar />;
      default:
        return <p>Test not found</p>;
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.heads}>
          <p className={styles.town}>Town: {param.town}</p>
          <p className={styles.test}>Test: {param.test.replace("_", " ")}</p>
        </div>
        {renderTestComponent(param.test)}
      </div>
    </>
  );
}

export default MainTest;
