import React from 'react';
import styles from './contacts.module.css'

// страница "КОНТАКТЫ"
const Contacts = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.numbers}>
        <h1>Контактная информация для частных лиц</h1>
        <h2>По всем интересующим вопросам обращайтесь по телефонам:</h2>
        <p>+7 (495) 232 10 11 - колл-центр Грозный</p>
        <p>+7 (495) 232 08 09 - горячая линия для туристов 24/7</p>
        <p>Cлужба поддержки и продаж OTI Hotels&Resorts для клиентов из России: + 7 (800) 444 24 11</p>
      </div>
      <div className={styles.map}>
        <h3>Офис продаж:</h3>
        <p>г. Грозный, ул. Трошева, д. 7</p>
        <h3>Режим работы офиса</h3>
        
      </div>
    </div>
  );
};

export default Contacts;