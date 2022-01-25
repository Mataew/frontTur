import React from "react";
import styles from "./profileSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import surt from '../../../../assets/slide1.jpg'
import surt2 from '../../../../assets/slide3.jpg'

const ProfileSlider = () => {
  return (
    <div>
      <Carousel className={ styles.Profile_carousel_wrapper}>
        <img src={ surt } className={styles.Profile__carousel_1}/>
        <img src={ surt2 } className={styles.Profile__carousel_1}/>
        <div className={styles.Profile__carousel_2}>item_2</div>
        <div className={styles.Profile__carousel_3}>item_3</div>
      </Carousel>
    </div>
  );
};

export default ProfileSlider;
