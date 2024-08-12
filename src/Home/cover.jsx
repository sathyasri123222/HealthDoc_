import React, { useState, useEffect, useRef } from "react";
import styles from "./home.module.css";
import Location from "./location";
import img1 from "../assets/Home_care.jpg";
import img2 from "../assets/lab_test.jpg";
import img3 from "../assets/pharmacy.jpg";
import img4 from "../assets/second_opinion.png";
import img from "../assets/video_consultation.png";

function Cover() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const images = [
    { src: img1, title: "Home Care" },
    { src: img2, title: "Lab Test" },
    { src: img3, title: "Pharmacy" },
    { src: img4, title: "Second Opinion" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Slow down the interval to 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      if (index === images.length) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(0)`;
        setTimeout(() => {
          carouselRef.current.style.transition = "transform 1.5s ease-in-out"; 
          setIndex(1);
        }, 50); 
      } else {
        carouselRef.current.style.transition = "transform 1.5s ease-in-out"; 
        carouselRef.current.style.transform = `translateX(-${index * 100}vw)`; 
      }
    }
  }, [index]);

  return (
    <div>
      <Location />
      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {images.concat(images[0]).map((img, i) => (
            <div key={i} className={styles.carouselImageWrapper}>
              <img src={img.src} alt={`Carousel Image ${i + 1}`} className={styles.carouselImage} />
              <div className={styles.carouselTitle}>{img.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.videoVisit}>
        <img src={img} alt="Video Visit" />
        <div className={styles.videoVisit_content}>
          <h2>Urgent care visits are only</h2>
          <h3> Rs.1000 or less per visit</h3>
          <p>
            The cost of a virtual visit is less than the normal cost of an
            urgent care or emergency room. Some insurance plans cover the cost
            of virtual visits. If you don't have medical insurance, you can
            still see one of our healthcare professionals and pay at the time of
            your visit.
          </p>
          <button className={styles.videoVisit_button}>Get Care Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cover;
