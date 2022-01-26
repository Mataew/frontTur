import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GetTurs } from '../../../redux/features/searchReducer';
 import styles from './info.module.css'


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

 
  

  return (<>
  
    <div className={styles.tours_map_img}>
    <h1>Отдых в любой точке мира</h1>
          <img src="https://klike.net/uploads/posts/2020-06/1592467299_7.jpg" alt="" />
        </div>
        <h1>Топовые предложения от топового Хусейна</h1>
    <div className={ styles.tours_wrapper}>
    { rating.map((item) => {
      return (
        <div className={ styles.tours_cards_wrapper }>
          <img src={`http://localhost:7000/${item.img}`}  alt="daun"/>
          <h3 className={ styles.tours_cards_title}>{item.to}</h3>
          <div className={ styles.hover_display }>
            <div>ОТКУДА: { item.from }</div>
            <div>КУДА: {  item.to}</div>
            <div>ЦЕНА: {  item.price}</div>
          </div>
        </div>
        )
    })}
  </div>
  </>);
};

export default Info;