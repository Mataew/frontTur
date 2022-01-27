import React, { useEffect } from "react";
import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import ProfileSlider from "./profileSlider/profileSlider";
import { userLoad } from "../../../redux/features/profileReducer";
import { cartLoad } from "../../../redux/features/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { GetTurs } from "../../../redux/features/searchReducer";

// страница для Профиля
const Profile = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoad(token));
    dispatch(cartLoad());
    dispatch(GetTurs())
  }, []);

  const handleCleanToken = () => {
    localStorage.removeItem("token");
  };

  const user = useSelector((state) => state.profReducer.user);

  const cart_Obj = useSelector((state) => state.profReducer.carts);

  const turs = useSelector((state) => state.turReducer.turs);

  

  const tur = turs.find((item) => item._id === cart_Obj.tur);

  {turs.map((tur) => {
    return cart_Obj.tur.map((cartTur) => {
      if (tur._id === cartTur) {
         console.log(tur);
      }
    });
  })}

  

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
              <h1>Мои брони:</h1>
              <div className={styles.Profile__wrapper__scroll__order}>
              {turs.map((tur) => {
                    return cart_Obj.tur.map((cartTur) => {
                      if (tur._id === cartTur) {
                       return (
                         <div>
                           {tur.img}
                           <img src={`http://localhost:7000/${tur.img}`} />
                         </div>
                       )
                      }
                    });
                  })}
                <Carousel
                  showThumbs={false}
                  showIndicators={false}
                  showStatus={false}
                  className={styles.Profile_carousel_wrapper}
                >
                  
                </Carousel>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Profile;
