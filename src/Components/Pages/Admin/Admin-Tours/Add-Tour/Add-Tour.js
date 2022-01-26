import React, { useEffect, useState } from 'react';
import styles from './add-tour.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { hotelsLoad } from '../../../../../redux/features/hotelsReducer';
import { TextField } from '@mui/material';
import { postTour } from '../../../../../redux/features/searchReducer';

const AddTour = () => {

  const hotels = useSelector(state => state.hotelsReducer.hotels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hotelsLoad())
  }, [])

  const [from, setFrom] = useState('')
  const fromChange = (e) => {
    setFrom(e.target.value)
  }

  const [to, setTo] = useState('')
  const toChange = (e) => {
    setTo(e.target.value)
  }

  const [data, setData] = useState('')
  const dataChange = (e) => {
    setData(e.target.value)
  }

  const [night, setNight] = useState('')
  const nightChange = (e) => {
    setNight(e.target.value)
  }

  const [amount, setAmount] = useState('')
  const amountChange = (e) => {
    setAmount(e.target.value)
  }

  const [price, setPrice] = useState('')
  const priceChange = (e) => {
    setPrice(e.target.value)
  }

  const [hotel, setHotels] = useState('')
  const hotelChange = (e) => {
    setHotels(e.target.value)
  }

  const addTour = (from, to, data, night, amount, hotel, price) => {
    dispatch(postTour(from, to, data, night, amount, hotel, price))
  }

  return (
    <div className={ styles.add_tour_main}>
      <h1>Добавление тура</h1>
      <div className={ styles.add_tour_inputs}>
        <input value={ from } onChange={ (e) => fromChange(e)} placeholder='Откуда' type='text'/>
        <input value={ to } onChange={ (e) => toChange(e)} placeholder='Куда' type='text'/>
        <input value={ data } onChange={ (e) => dataChange(e)} placeholder='Дата вылета' type='text'/>
        <input value={ night } onChange={ (e) => nightChange(e)} placeholder='Количество ночей' type='text'/>
        <input value={ amount } onChange={ (e) => amountChange(e)} placeholder='Количество человек' type='text'/>

        {/*   выпадающее движение для выбора отеля    */}
        <select className={ styles.add_tour_select_hotel} value={ hotel } onChange={ (e) => hotelChange(e)}>
          <option  hidden='Выберите отель' value="Выберите отель">Выберите отель</option>
          { hotels.map((item) => {
            return (
              <option value={ item._id}>{item.name}</option>
            )
          })}
        </select>
        {/*   выпадающее движение для выбора отеля    */}

        <input value={ price } onChange={ (e) => priceChange(e)} placeholder='Цена' type='text'/>
      </div>
      <button onClick={ () => addTour(from, to, data, night, amount, hotel, price)}>Добавить</button>
    </div>
  );
};

export default AddTour;