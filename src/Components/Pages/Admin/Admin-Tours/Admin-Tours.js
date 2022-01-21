import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import turReducer, { GetTurs } from '../../../../redux/features/searchReducer';
import styles from './admin-tours.module.css'

const AdminTours = () => {

  const tours = useSelector(state => state.turReducer.turs)
  console.log(tours)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetTurs())
  }, [])

  return (
    <div className={ styles.admin_tours_wrapper}>
      { tours.map((item) => {
        return (
          <div className={ styles.tours_cards_wrapper }>
            <img src={`http://localhost:7000/${item.img}`}  alt="daun"/>
            <h3 className={ styles.tours_cards_title}>{item.to}</h3>
            <div className={ styles.hover_display}>
              <div>ОТКУДА: {item.from}</div>
              <div>КУДА: {item.to}</div>
              <div>ЦЕНА: {item.price}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default AdminTours;