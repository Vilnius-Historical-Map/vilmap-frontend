import styles from './navigation.module.scss'
import HeaderNavigationLinks from './Tnavigation'

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        {HeaderNavigationLinks.map((link, index) => (
          <li key={index} className={styles.nav__menu__item}>
            <a href={link.linkUrl} className={styles.nav__menu__link}>{link.linkName}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}