import React from "react";
import styles from "./home.module.css";
import { useState, useEffect } from "react";
import Specalist from "./suggestions/doctor_suggest";
import SuggestionList from "./suggestion";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Location({ location }) {
  const [town, setTown] = useState("");
  const [error, setError] = useState(null);
  const [doc_error, setDoc_error] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [Doc_spec] = useState(Specalist);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    setTown(e.target.value);
  };

  const handleDoc = (e) => {
    const value = e.target.value;
    setDoctors(value);

    const filtered = Doc_spec.filter((specality) =>
      specality.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestClick = (suggestion) => {
    setDoctors(suggestion);
    setShowSuggestions(false);
  };

  function handleBlur() {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 1000);
  }

  const handleSearch = () => {
    let hasError = false;
    if (town === "") {
      hasError = true;
      setError("Please enter a valid location");
      setTimeout(() => {
        setError(null);
      }, 2500);
    } else {
      setError(null);
    }

    if (doctors === "" || !Doc_spec.includes(doctors)) {
      setDoc_error("Invalid doctor specialty");
      hasError = true;
    } else {
      setDoc_error(null);
    }

    if (!hasError) {
      location();
    } else {
      setTimeout(() => {
        setError(null);
        setDoc_error(null);
      }, 2500);
    }
  };

  return (
    <div className={styles.locater}>
      <div className={styles.location_box}>
        <button className={styles.location_icon}>
          <FaLocationCrosshairs />
        </button>
        <div className={styles.location_suggestion_box}>
          <input
            type="text"
            name=""
            id=""
            value={town}
            onChange={handleChange}
            className={styles.location_input}
            placeholder="Enter your location"
          />
          <p className={`${styles.error} ${error && styles.view}`}>{error}</p>
        </div>
        <div className={styles.suggestion_box}>
          <input
            type="text"
            name=""
            id=""
            value={doctors}
            onChange={handleDoc}
            className={styles.location_input}
            placeholder="specalist "
            onClick={() => setShowSuggestions(true)}
            onBlur={handleBlur}
          />
          <div className={showSuggestions && doctors.length > 0 && styles.outer_sbox}>
            {showSuggestions &&  doctors.length >0 && (
              <SuggestionList
                suggestions={filteredSuggestions}
                handleSuggestClick={handleSuggestClick}
              />
            )}
          </div>
          <p className={`${styles.error} ${doc_error && styles.view}`}>
            {doc_error}
          </p>
        </div>
        <button onClick={handleSearch} className={styles.l_button}>
          search
        </button>
      </div>
    </div>
  );
}

export default Location;
