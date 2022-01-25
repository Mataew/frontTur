import React from 'react';
import styles from './add-tour.module.css';

const AddTour = () => {
  return (
    <div>
      <h1>Добавление тура</h1>
      <input placeholder='Откуда' type='text'/>
      <input placeholder='Куда' type='text'/>
      <input placeholder='Цена' type='text'/>
      <input placeholder='Отель' type='text'/>
    </div>
  );
};

export default AddTour;