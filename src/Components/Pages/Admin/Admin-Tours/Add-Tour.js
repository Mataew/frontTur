import React from 'react';
import styles from './admin-tours.module.css';
import { Link } from 'react-router-dom';

const AddTour = () => {
  return (
    <div className={ styles.add_tour }>
      <Link to='/addTour'>+</Link>
    </div>
  );
};

export default AddTour;