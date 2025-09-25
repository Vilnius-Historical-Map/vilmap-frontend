import { NavLink } from 'react-router-dom'
import styles from './navigation.module.scss'
import HeaderNavigationLinks from './Tnavigation'

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        {HeaderNavigationLinks.map((link, index) => (
          <li key={index} className={styles.nav__menu__item}>
            <NavLink to={link.linkUrl} className={({ isActive }) => `${styles.nav__menu__link} ${isActive ? styles.nav__menu__link__active : ''}`}>
              {link.linkName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}