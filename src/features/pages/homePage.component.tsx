import styles from './homePage.module.scss'

export const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <h1 className={styles.homepage__h1}>
        The history of Vilnius 
        <span className={styles.homepage__h1__span}>in events</span>
      </h1>

      <div className={styles.homepage__background}></div>
    </section>
  )
}