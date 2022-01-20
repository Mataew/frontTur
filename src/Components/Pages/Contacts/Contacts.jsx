import React from 'react';
import styles from './contacts.module.css'

// страница "КОНТАКТЫ"
const Contacts = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsText}>
          <h1>Свяжитесь с нами</h1>
          <p>Хотите ли вы связаться с краткой информацией или просто узнать, как добраться до офиса, вы можете найти всю необходимую информацию ниже.</p>
        </div>
        <div className={styles.contactUsFirstImage}>
        <img src="https://d2jd1xj0qdoqs5.cloudfront.net/craft/uploads/Contact/Contact-Left-Half.jpg?mtime=20190213101134" />
        </div>
        <div className={styles.contactUsSecondImage}>
        <img src="https://d2jd1xj0qdoqs5.cloudfront.net/craft/uploads/Contact/Contact-Right-Half.jpg?mtime=20190213101135" />
        </div>
      </div>
      <div className={styles.findUs}>
        <div className={styles.findUsAdress}>
          <h1>Как нас найти</h1>
          <p>г. Грозный, ул. Трошева, дом 7</p>
          <a href="">Показать на карте</a>
        </div>
        <div className={styles.findUsGetInTouch}>
          <h1>Как с нами связаться</h1>
            <p>Наша почта</p>
            <p>vaytur@mail.ru</p>
            <p>Номер для связи</p>
            <p>+7(999)-999-99-99</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;