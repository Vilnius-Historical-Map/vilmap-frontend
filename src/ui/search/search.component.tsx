import styles from './search.module.scss';

import { useState } from "react";

export  const SearchForm = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onClearFilters = () => {
    setInput("");
    setSubmitted(false);
  };

  const onInputFocus = () => {
    console.log("Input focused");
  };

  const isInvalid = submitted && input.trim().length > 0 && input.trim().length < 3;

  return (
    <section className={styles.search}>
      <form onSubmit={onFormSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            aria-placeholder="Search by event or location"
            id="cityInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={onInputFocus}
            aria-describedby="cityError"
            aria-invalid={isInvalid}
            aria-label="Enter city name to filter by location."
          />

          {input ? (
            <div className={styles.clearFilter}>
              <button
                type="button"
                onClick={onClearFilters}
                aria-label="Tap to clear the filter"
              >
                <span className={`${styles.clearBtn} material-symbols-outlined`}>close</span>
              </button>
            </div>
          ):  <div className={styles.searchFilter}>
            <span className="material-symbols-outlined">search</span>
            </div>}
        </div>

      </form>

      <div
        className={styles.error}
        id="inputError"
        aria-live="assertive"
        aria-atomic="true"
      >
        {submitted && input.trim().length > 0 && input.trim().length < 3 && (
          <>Input must be at least 3 characters long.</>
        )}
      </div>
    </section>
  );
}
