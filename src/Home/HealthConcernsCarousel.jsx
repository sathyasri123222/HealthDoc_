import React from "react";
import imgConcern1 from "../assets/Piles.jpeg"; 
import imgConcern2 from "../assets/skin.jpg"; 
import imgConcern3 from "../assets/sick_kid.jpeg"; 
import imgConcern4 from "../assets/stomach.jpeg"; 
import styles from "./home.module.css";

function HealthConcernsCarousel() {
  const concerns = [
    {
      imgSrc: imgConcern1,
      title: "Piles Problem?",
      price: "₹ 599",
      linkText: "Consult Now",
    },
    {
      imgSrc: imgConcern2,
      title: "Skin problems?",
      price: "₹ 549",
      linkText: "Consult Now",
    },
    {
      imgSrc: imgConcern3,
      title: "Sick Kid?",
      price: "₹ 599",
      linkText: "Consult Now",
    },
    {
      imgSrc: imgConcern4,
      title: "digestive disorders?",
      price: "₹ 450",
      linkText: "Consult Now",
    },
  ];

  return (
    <div className={styles.concernsSection}>
      <h2>Common Health Concerns</h2>
      <p>Consult a doctor online for any health issue</p>
      <div className={styles.concernsCarousel}>
        {concerns.map((concern, index) => (
          <div key={index} className={styles.concernItem}>
            <img src={concern.imgSrc} alt={concern.title} />
            <h3>{concern.title}</h3>
            <p>{concern.price}</p>
            <a href="#">{concern.linkText} &gt;</a>
          </div>
        ))}
      </div>
      <button className={styles.seeAllSymptoms}>See All Symptoms</button>
    </div>
  );
}

export default HealthConcernsCarousel;
