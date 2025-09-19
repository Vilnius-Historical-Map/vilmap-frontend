import { Button } from '@ui/button/button'
import styles from './homePage.module.scss'

export const HomePage = () => {
  return (
    <section className={styles.homepage}>

      <div className={styles.homepage__wrapper}>
        <div className={styles.homepage__wrapper__left}>
        <h1 className={styles.homepage__h1}>
        The history of Vilnius 
        <span className={styles.homepage__h1__span}> in events</span>
      </h1>
      </div>

      <div className={styles.homepage__wrapper__right}>
        <Button size='lg' className={styles.homepage__button}>Explore <img src="src\assets\images\arrow_right_alt.svg" alt="" /></Button>

      </div>

      </div>
 
    </section>
  )
}