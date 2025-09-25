import styles from './notFoundPage.module.scss';

export const NotFoundPage = () => {
  return (
    <section className={styles.notFoundPage}>
      <div className={styles.notFoundPage__container}>
          <p className={styles.errorStatus}>404 <img src="src/assets/images/error404.png" alt="" /></p>
          <h1 className={styles.errorMessage}>Ooops... the page you are looking for does not exist.</h1>
      </div>
    
    </section>
  );
};
