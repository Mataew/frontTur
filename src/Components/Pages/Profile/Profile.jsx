import React, { useEffect } from "react";
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

  const handleCleanToken = () => {
    localStorage.removeItem("token");
  };

  const user = useSelector((state) => state.profReducer.user);

  return (
    <div className={styles.Profile__wrapper}>
      {user.map((item) => {
        return (
          <>
            <div className={styles.Profile__wrapper__profBlock}>
              <div className={styles.Profile__wrapper__profBlock__img}>
                <img
                  src="https://cryptor.net/sites/default/files/pictures/picture-425-1516178707.png"
                  alt=""
                />
              </div>
              <div className={styles.Profile__wrapper__profBlock__name}>
                <p>
                  {item.firstName} {item.lastName}
                </p>
              </div>
              <div className={styles.Profile__wrapper__profBlock__email}>
                <p>{item.login}</p>
              </div>
              <div className={styles.Profile__wrapper__logOut}>
              <Link to="/" onClick={() => handleCleanToken()}>
                Выйти из аккаунта
              </Link>
            </div>
            </div>
            <div className={styles.Profile__wrapper__scroll}>
              <div className={styles.Profile__wrapper__scroll__title}>
                <p>Мои брони:</p>
              </div>
              <div className={styles.Profile__wrapper__scroll__order}>
                <ProfileSlider />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Profile;
