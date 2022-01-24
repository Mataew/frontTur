import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerMain}>
      <div className={styles.footerProfile}>
        <a href="#">Личный кабинет</a>
      </div>
    </div>
  );
};

export default Footer;