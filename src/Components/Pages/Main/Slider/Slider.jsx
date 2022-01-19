import React from 'react';
import slide1 from '../../../../assets/slide1.jpg'
import slide2 from '../../../../assets/slide2.jpeg'
import slide3 from '../../../../assets/slide3.jpg'
import styles from './slider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div className={ styles.slider_main}>
      <div className={ styles.title_slider_wrapper }>
        <h1 className={ styles.title_slider }>НАЧНИТЕ ПОКОРЯТЬ МИР <br/> ВМЕСТЕ С НАМИ</h1>
        <h2 className={ styles.title2_slide }>Направление выбирать вам</h2>
      </div>
      <Carousel dynamicHeight={ 600 } autoPlay={ true } interval={ 1000 } infiniteLoop={ true } showThumbs={ false } showIndicators={ false } showStatus={ false } className={ styles.slider_wrapper }>
        <img className={ styles.slider_img } src={ slide1 } alt="da"/>
        <img className={ styles.slider_img } src={ slide2 } alt="da"/>
        <img className={ styles.slider_img } src={ slide3 } alt="da"/>
      </Carousel>



      {/*<Carousel swiping={ false } autoplay={ true } speed={ 1200 } initialSlideHeight={ 637 }  pauseOnHover={ false } withoutControls={ true } wrapAround={ true } autoplayReverse={ true } autoplayInterval={ 2000 } className={ styles.slider_wrapper }>*/}
      {/*  <img className={ styles.slider_img } src={ slide1 } alt="daun"/>*/}
      {/*  <img className={ styles.slider_img } src={ slide2 } alt="daun"/>*/}
      {/*  <img className={ styles.slider_img } src={ slide3} alt="daun"/>*/}
      {/*</Carousel>*/}
    </div>
  );
};

export default Slider;