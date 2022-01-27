import React, { useState } from 'react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Profile from '../../Pages/Profile/Profile';

const Header = () => {

  const token = localStorage.getItem("token");

  return (
    <header>
      <ul className={ styles.nav }>
        <li className={ styles.nav_item}><NavLink to='/info'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</NavLink></li>
        <li className={ styles.nav_item}><NavLink to='/company'>О КОМПАНИИ</NavLink></li>
        <li><Link to='/'><img className={ styles.header_logo } src={ logo } alt=""/></Link></li>
        <li className={ styles.nav_item}><NavLink to='/contacts'>КОНТАКТЫ</NavLink></li>
      </ul>
      { token ? <Profile /> : <Link to='/authorization' className={ styles.authorization }>ВОЙТИ</Link>}
    </header>
  );
};

export default Header;