import styles from './header.module.scss';
import { Navigation } from './navigation/navigation.component';

export const Header =() => {
  return (
    <header className={styles.header}>
      <a href="#" aria-label='Navigate to home page'>
        <img src="./src/assets/logo.svg" alt="" />
      </a>
      <Navigation/>
    </header>
  )
}