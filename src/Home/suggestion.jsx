import React, { useEffect, useRef } from "react";
import styles from "./home.module.css";

const SuggestionList = ({ suggestions, handleSuggestClick }) => {
  if (suggestions.length === 0) {
    return null;
  }

  const s_list = suggestions.map((suggestion, index) => {
    return (
      <li
        className={styles.suggestion}
        key={index}
        onClick={() => handleSuggestClick(suggestion)}
      >
        {suggestion}
      </li>
    );
  });

  return <ul className={styles.suggestion_list}>{s_list}</ul>;
};

export default SuggestionList;
