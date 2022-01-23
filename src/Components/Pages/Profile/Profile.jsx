import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Link } from 'react-router-dom'


// страница для Профиля
const Profile = () => {

  const [disable, setDisable] = useState(false)

  const handleCleanToken = () => {
    localStorage.removeItem('token')
  }

  const handleCloseProfile = () => {
    setDisable(false)
  }

  const handleOpenProfile = () => {
    setDisable(true)
  }

  if (disable === true) {
    return (
      <div className={styles.Profile__wrapper}>
        <div onClick={handleCloseProfile} className={styles.Profile__wrapper__exit}>❌</div>
        <div className={styles.Profile__wrapper__profBlock}>
      <div className={styles.Profile__wrapper__profBlock__img}>
        <img src="https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png" alt="" />
      </div>
      <div className={styles.Profile__wrapper__profBlock__name}>
        <p>имя фамилия</p>
      </div>
      <div className={styles.Profile__wrapper__profBlock__email}>
        <p>daun5545@gmail.com</p>
      </div>
      </div>
      <div className={styles.Profile__wrapper__scroll}>
        <div className={styles.Profile__wrapper__scroll__title}>
          <p>Мои брони:</p>
        </div>
        <div className={styles.Profile__wrapper__scroll__order}></div>
      </div>
      <div className={styles.Profile__wrapper__logOut}>
        <Link to="/" onClick={() => handleCleanToken()}>Выйти из аккаунта</Link>
      </div>
      </div>
        );
  } else if (disable === false) {
    return (
      <div onClick={handleOpenProfile} className={styles.bg}>
      <div className={styles.bg__icon}>
        <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
      </div>
      </div>
    );
  }


};

export default Profile;