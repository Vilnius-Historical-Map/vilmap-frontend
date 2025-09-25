import { Button } from '@ui/button/button'
import styles from './homePage.module.scss'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate('/map')
  }

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
        <Button size='lg' className={styles.homepage__button} onClick={handleExploreClick}>Explore <img src="src\assets\images\arrow_right_alt.svg" alt="" /></Button>

      </div>

      </div>
 
    </section>
  )
}