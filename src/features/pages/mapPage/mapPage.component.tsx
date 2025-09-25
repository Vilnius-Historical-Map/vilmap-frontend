import styles from './mapPage.module.scss'
import { SearchForm } from '@ui/search/search.component';
import { Map } from '@features/map/map.component';

export const MapPage = () => {
  return (
    <section className={styles.mapPage}>
      <div className={styles.mapPage__wrapper}>
        <div className={styles.mapPage__orientation}>
            <SearchForm />

          <div className={styles.filters}>
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
        <Map />

      </div>
    </section>

  );
};