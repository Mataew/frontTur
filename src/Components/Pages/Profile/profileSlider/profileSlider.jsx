import React, { useEffect } from "react";
import styles from "./profileSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import surt from "../../../../assets/slide1.jpg";
import surt2 from "../../../../assets/slide3.jpg";
import { useDispatch } from "react-redux";
import { cartLoad } from "../../../../redux/features/profileReducer";
import { useSelector } from "react-redux";

const ProfileSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  
  }, []);

  const cart_Obj = useSelector((state) => state.profReducer.carts);

  const turs = useSelector((state) => state.turReducer.turs);

  const tur = turs.find((item) => item._id === cart_Obj.tur);
  {turs.map((tur) => {
    return cart_Obj.tur.map((cartTur) => {
      if (tur._id === cartTur) {
         return tur
      }
    });
  })}

  return (
    <div>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        className={styles.Profile_carousel_wrapper}
      >
      </Carousel>
    </div>
  );
};

export default ProfileSlider;