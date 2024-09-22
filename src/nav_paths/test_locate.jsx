import React from "react";
import styles from "./test.module.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import SuggestionTest from "../Home/suggestions/test_suggest";
import SuggestionList from "../Home/suggestion";
import { useNavigate } from "react-router-dom";

function Test_Locate() {
  const [test, setTest] = useState("");
  const [town, setTown] = useState("");
  const search_ref = useRef(null);
  const [lerror, setError] = useState(null);
  const [test_error, setTest_error] = useState(null);
  const [Test_spec] = useState(SuggestionTest);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [nav, setnav] = useState(false);
  const count = 0;
  const naver = useNavigate();

  const handleSuggestClick = (test) => {
    setTest(test);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    setTown(e.target.value);
  };

  function handleBlur() {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 1000);
  }

  const handleDoc = (e) => {
    const value = e.target.value;
    setTest(value);

    const filtered = Test_spec.filter((specality) =>
      specality.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    let hasError = false;
    if (town === "") {
      setError("Please enter a valid location");
      hasError = true;
      setTimeout(() => {
        setError(null);
      }, 2500);
    }
    if (test == "" || !Test_spec.includes(test)) {
      setTest_error("please enter a valid test");
      hasError = true;
      setTimeout(() => {
        setTest_error(null);
      }, 2500);
    }

    if (!hasError) {
      setnav(true);
      const formattedTest = test.replace(/\s+/g, "_");
      naver(`/HealthDoc_/doctor/${town}/${formattedTest}`);
    }
  };

  return (
    <>
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
              className={styles.location_input}
              placeholder="Enter your location"
              value={town}
              onChange={handleChange}
            />
            {lerror && (
              <p className={`${styles.error} ${styles.view}`}>{lerror}</p>
            )}
          </div>
          <div className={styles.suggestion_box}>
            <input
              type="text"
              name=""
              id=""
              className={styles.location_input}
              placeholder="test"
              onChange={handleDoc}
              value={test}
              onClick={() => setShowSuggestions(true)}
              onBlur={handleBlur}
            />
            <div
              className={
                showSuggestions && test.length >= 1 && styles.outer_sbox
              }
            >
              {showSuggestions && test.length >= 1 && (
                <SuggestionList
                  suggestions={filteredSuggestions}
                  handleSuggestClick={handleSuggestClick}
                />
              )}
            </div>
            {test_error && (
              <p className={`${styles.error} ${styles.view}`}>{test_error}</p>
            )}
          </div>
          <button onClick={handleSearch} className={styles.l_button}>
            search
          </button>
        </div>
      </div>
    </>
  );
}

export default Test_Locate;
