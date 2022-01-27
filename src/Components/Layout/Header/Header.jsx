import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { useDispatch } from 'react-redux';
import { userLoad } from '../../../redux/features/profileReducer';
const Header = () => {

  const token = localStorage.getItem("token");

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(userLoad(token))
  // })

  return (
    <header>
      <ul className={ styles.nav }>
        <li className={ styles.nav_item}><NavLink to='/info'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</NavLink></li>
        <li className={ styles.nav_item}><NavLink to='/company'>О КОМПАНИИ</NavLink></li>
        <li><Link to='/'><img className={ styles.header_logo } src={ logo } alt=""/></Link></li>
        <li className={ styles.nav_item}><NavLink to='/contacts'>КОНТАКТЫ</NavLink></li>
      </ul>
      { token ? <a href='/profile'>Профиль</a> : <Link to='/authorization' className={ styles.authorization }>ВОЙТИ</Link>}
    </header>
  );
};

export default Header;