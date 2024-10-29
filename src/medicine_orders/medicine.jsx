import React from "react";
import styles from "./medic.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { RiHospitalLine } from "react-icons/ri";
import list from "./order_data";
import Cart from "./cart";

function Medicine({ cart_data, updateCart }) {
  const day_ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(cart_data);
  }, []);

  const scrollPercentage = (percentage) => {
    if (day_ref.current) {
      const containerWidth = day_ref.current.scrollWidth;
      const visibleWidth = day_ref.current.clientWidth;
      const scrollableWidth = containerWidth - visibleWidth;
      const scrollDistance = (scrollableWidth * percentage) / 100;

      day_ref.current.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    scrollPercentage(50);
  };

  const prev = () => {
    scrollPercentage(-50);
  };
  return (
    <div>
      <div className={styles.back}>
        <div className={styles.days}>
          <div className={styles.weekdays}>
            <p className={styles.wbutton} onClick={prev}>
              <FaChevronLeft />
            </p>
            <div className={styles.gallery} ref={day_ref}>
              <div>
                <span>
                  <button>Nutrition products</button>
                </span>
                <span>
                  <button>supplements</button>
                </span>
                <span>
                  <button>baby care</button>
                </span>
                <span>
                  <button>vitamins</button>
                </span>
                <span>
                  <button>women care</button>
                </span>
                <span>
                  <button>eye care</button>
                </span>
                <span>
                  <button>pain killers</button>
                </span>
                <span>
                  <button>first aid kit</button>
                </span>
                <span>
                  <button>health devices</button>
                </span>
                <span>
                  <button>ayurveda</button>
                </span>
              </div>
              <div>
                <span>
                  <button>skincare</button>
                </span>
                <span>
                  <button>mental health</button>
                </span>
                <span>
                  <button>oral care</button>
                </span>
                <span>
                  <button>personal hygiene</button>
                </span>
                <span>
                  <button>digestive health</button>
                </span>
                <span>
                  <button>fitness equipment</button>
                </span>
                <span>
                  <button>weight management</button>
                </span>
                <span>
                  <button>heart health</button>
                </span>
                <span>
                  <button>hair care</button>
                </span>
                <span>
                  <button>first aid</button>
                </span>
              </div>
              <div>
                <span>
                  <button>immune support</button>
                </span>
                <span>
                  <button>joint care</button>
                </span>
                <span>
                  <button>stress relief</button>
                </span>
                <span>
                  <button>mobility aids</button>
                </span>
                <span>
                  <button>sleep aids</button>
                </span>
                <span>
                  <button>dermatology</button>
                </span>
                <span>
                  <button>allergy relief</button>
                </span>
                <span>
                  <button>sexual wellness</button>
                </span>
                <span>
                  <button>respiratory care</button>
                </span>
                <span>
                  <button>diabetes care</button>
                </span>
              </div>
            </div>
            <p className={styles.wbutton} onClick={next}>
              <FaChevronRight />
            </p>
          </div>
        </div>
        <div className={styles.covers}>
          <div className={styles.maincover}>
            <div className={styles.poster}>
              <h1>looking for quality drugs ?</h1>
              <button>click here</button>
            </div>
            <div className={styles.rpos}>
              <div className={styles.jan}></div>
              <div className={styles.feb}></div>
              <div className={styles.mar}></div>
              <div className={styles.apr}></div>
              <div className={styles.may}></div>
            </div>
            <div className={styles.carts}>
              <Cart item={cart_data} updateCart={updateCart} />
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.bar}>
              <label htmlFor="">
                <input
                  type="text"
                  name="nutri"
                  id=""
                  placeholder="search medicines"
                />
                <p>
                  <FaSearch />
                </p>
              </label>
            </div>
            <div className={styles.med}>
              <div className={styles.med1}>
                <span>
                  <p>
                    <FaHandHoldingMedical />
                  </p>
                </span>
                <div className={styles.content}>
                  <h3>pharmacy near me</h3>
                  <p>find store</p>
                </div>
                <p className={styles.chevron}>
                  <FaChevronRight />
                </p>
              </div>
              <div className={styles.med2}>
                <span>
                  <p>
                    <BiNotepad />
                  </p>
                </span>
                <div className={styles.content}>
                  <h3>Get 15% off on medicines</h3>
                  <p>find store</p>
                </div>
                <p className={styles.chevron}>
                  <FaChevronRight />
                </p>
              </div>
              <div className={styles.med3}>
                <span>
                  <p>
                    <MdLocalPharmacy />
                  </p>
                </span>
                <div className={styles.content}>
                  <h3>hospital vist</h3>
                  <p>find store</p>
                </div>
                <p className={styles.chevron}>
                  <FaChevronRight />
                </p>
              </div>
              <div className={styles.med4}>
                <span>
                  <p>
                    <RiHospitalLine />
                  </p>
                </span>
                <div className={styles.content}>
                  <h3>video consult</h3>
                  <p>find store</p>
                </div>
                <p className={styles.chevron}>
                  <FaChevronRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicine;
