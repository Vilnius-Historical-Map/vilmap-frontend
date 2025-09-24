import { Button } from '@ui/button/button';
import styles from './search.module.scss';

import { useState } from "react";

export  const SearchForm = () => {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (city.trim().length >= 3) {
      console.log("Search city:", city);
    }
  };

  const onClearFilters = () => {
    setCity("");
    setSubmitted(false);
  };

  const onInputFocus = () => {
    console.log("Input focused");
  };

  const isInvalid = submitted && city.trim().length > 0 && city.trim().length < 3;

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <div className={styles.row}>
          <input
            type="text"
            placeholder="Filter by city"
            id="cityInput"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onFocus={onInputFocus}
            aria-describedby="cityError"
            aria-invalid={isInvalid}
            aria-label="Enter city name to filter by location."
          />

          {city && (
            <div className="clear-filter">
              <button
                type="button"
                onClick={onClearFilters}
                aria-label="Tap to clear the filter"
              >
                <span className={styles.clearBtn}>×</span>
              </button>
            </div>
          )}
        </div>

        <Button type="submit" className={styles.primary}>
          Search
        </Button>
      </form>

      <div
        className="error"
        id="cityError"
        aria-live="assertive"
        aria-atomic="true"
      >
        {submitted && city.trim().length > 0 && city.trim().length < 3 && (
          <>City name must be at least 3 characters long.</>
        )}
      </div>
    </section>
  );
}
