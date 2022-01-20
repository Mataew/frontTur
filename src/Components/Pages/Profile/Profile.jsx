import React from 'react';
import styles from './profile.module.css'

// страница для Профиля
const Profile = () => {
  return (
<div className={styles.Profile__wrapper}>
<div className={styles.Profile__block}>
  <div className={styles.Profile__block__img}>
    <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photo-Image.png" alt="" />
  </div>
  <div className={styles.Profile__block__name}>
    Ибрагим Ибрагимов
  </div>
  <div className={styles.Profile__block__number}>
    +7 (922)-047-27-17
  </div>
  <div className={styles.Profile__block__exitBtn}>
    <button>Выход</button>
  </div>
</div>
<div className={styles.Profile__cart}>
  <h2>Мои предпочтения:</h2>
  
</div>
</div>
  );
};

export default Profile;