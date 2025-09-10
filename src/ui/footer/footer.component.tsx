import styles from './footer.module.scss'

import footerLinksColumns,  { type TfooterLinksColumn}  from "./TfooterLinksColumn";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__upper}>
      
        <a href="#" aria-label='Navigate to home page'>
        <img src="./src/assets/logo.svg" alt="" />
        </a>

        
        <div className={styles.column}>
          <div className={styles.column__wrapper}>
            <h3>Our motto</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </div>
        </div>
        

        <div className={styles.column}>
          {
            footerLinksColumns.map((column: TfooterLinksColumn, index) => (
              <div className={styles.column__wrapper} key={index}>
                <h3>{column.title}</h3>
                <ul>
                  {
                    column.links.map((link, ind) => (
                      <li key={ind}>
                        <a href={link.linkUrl}>{link.linkName}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>


      </div>

      <div className={styles.hr}></div>

      <div className={styles.footer__bottom}>
          <div className={styles.column}>
          <div className={styles.column__wrapper}>
            <h3>Email</h3>
            <p>support@vimmap.com</p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.column__wrapper}>
            <h3>Follow Us</h3>
            <a href="#" aria-label='Navigate to our Facebook.'>
                  <img src="src\assets\images\facebook.svg" alt="" />
            </a>

            <a href="#" aria-label='Navigate to our Instagram.'>
                  <img src="src\assets\images\instagram.svg" alt="" />
            </a>
            
          </div>
        </div>
        
      </div>
    </footer>
  )
}