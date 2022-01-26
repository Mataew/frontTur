import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import ProfileSlider from "./profileSlider/profileSlider";
import { userLoad } from "../../../redux/features/profileReducer";
import { useDispatch, useSelector } from "react-redux";

// страница для Профиля
const Profile = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoad(token));
  }, []);

  const [disable, setDisable] = useState(false);

  const handleCleanToken = () => {
    localStorage.removeItem("token");
  };

  const user = useSelector(state => state.profReducer.user)

  const handleCloseProfile = () => {
    setDisable(false);
  };

  const handleOpenProfile = () => {
    setDisable(true);
  };

  if (disable === true) {
    return (
      <div className={styles.Profile__wrapper}>
        {user.map((item) => {
          return(
            <>
            <div
            onClick={handleCloseProfile}
            className={styles.Profile__wrapper__exit}
          >
            ❌
          </div>
          <div className={styles.Profile__wrapper__profBlock}>
            <div className={styles.Profile__wrapper__profBlock__img}>
              <img
                src="https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png"
                alt=""
              />
            </div>
            <div className={styles.Profile__wrapper__profBlock__name}>
              <p>{item.firstName} {item.lastName}</p>
            </div>
            <div className={styles.Profile__wrapper__profBlock__email}>
              <p>{item.login}</p>
            </div>
          </div>
          <div className={styles.Profile__wrapper__scroll}>
            <div className={styles.Profile__wrapper__scroll__title}>
              <p>Мои брони:</p>
            </div>
            <div className={styles.Profile__wrapper__scroll__order}>
              <ProfileSlider>
  
              </ProfileSlider>
            </div>
          </div>
          <div className={styles.Profile__wrapper__logOut}>
            <Link to="/" onClick={() => handleCleanToken()}>
              Выйти из аккаунта
            </Link>
          </div>
          </>
          )
        })}

      </div>
    );
  } else if (disable === false) {
    return (
      <div onClick={handleOpenProfile} className={styles.Profile__bg}>
        <div className={styles.Profile__bg__icon}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
            alt=""
          />
        </div>
      </div>
    );
  }
};

export default Profile;
