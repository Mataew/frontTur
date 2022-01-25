import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetTurs } from '../../../redux/features/searchReducer';
 import stylesTour from './info.module.css'
import styles from "../Main/Search/search.module.css";

// Страница "Полезная информация"
const Info = () => {

  const dispatch = useDispatch()

 useEffect(() => {
  dispatch(GetTurs())
 },[dispatch])

 const tours = useSelector((state) => state.turReducer.turs)

 const rating = tours.filter((item) => {
    if (item.hotel.rating >= 4) {
      return item
    } 
  })

 
  

  return (
    <div className={stylesTour.main}>
           <div className={styles.tur_name}>
        {rating.map((item) => {
          return (
            <div data-aos="img-animation" className={styles.search_imgBlock}>
            <div className={ styles.tours_cards_wrapper }>
            <img className={styles.tur_img} src={`http://localhost:7000/${item.img}`}  alt="daun"/>
            </div>
            <div className={ styles.absolute_display}>
            <h3 className={ styles.tours_cards_title}>{item.to}</h3>
            </div>  
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;