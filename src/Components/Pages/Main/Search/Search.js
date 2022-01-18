import React from 'react';
import styles from './search.module.css'
import fon from '../../../../assets/search_fon.png'

const Search = () => {
  return (
    <div className={ styles.search_main } style={{ backgroundImage: `url("${fon}")`}}>
      <div className={ styles.search_input }>
        <input type="text"/>
        <input/>
        <input type="text"/>

        <input type="text"/>
      </div>
      <h1>Лучшие предложения</h1>

    </div>
  );
};

export default Search;