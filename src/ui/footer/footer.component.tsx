import styles from './footer.module.scss'

import footerLinksColumns,  { type TfooterLinksColumn}  from "./TfooterLinksColumn";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__upper}>
      
        <a href="#" aria-label='Navigate to home page'>
        <img src="./src/assets/logo.svg" alt="" />
        </a>

        <div className={styles.footer__nav}>
          <div className={styles.column}>
         
            <h3 className ={styles.column__title}>Our motto</h3>
            <p className ={styles.column__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        
        </div>
        

        <div className={styles.columns__wrapper}>
          {
            footerLinksColumns.map((column: TfooterLinksColumn, index) => (
              <div className={styles.column} key={index}>
                <h3 className ={styles.column__title}>{column.title}</h3>
                <ul className={styles.column__list}>
                  {
                    column.links.map((link, ind) => (
                      <li key={ind}>
                        <a href={link.linkUrl} className ={styles.column__link}>{link.linkName}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>


        </div>
        
      </div>

      <div className={styles.hr}></div>

      <div className={styles.footer__bottom}>
          <div className={styles.column}>
            <h3 className ={styles.column__title}>Email</h3>
            <p className={styles.column__paragraph}>support@vimmap.com</p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.column__title}>Follow Us</h3>
          <div className={styles.socials}>
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