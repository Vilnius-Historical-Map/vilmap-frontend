import styles from './mapPage.module.scss'
import { SearchForm } from '@ui/search/search.component';


export const MapPage = () => {
  return (
    <section className={styles.mapPage}>
      <div className={styles.mapPage__wrapper}>
         <SearchForm />
        <div className={styles.mapPage__orientation}>
          <button className={styles.mapPage__option}>
            Filter
            <span className="material-symbols-outlined"> filter_list</span>
          </button>

          <button className={styles.mapPage__option}>
            Sort by
            <span className="material-symbols-outlined"> keyboard_arrow_down</span>
          </button>

        </div>
      </div>
    </section>

  );
};