import React from 'react';
import styles from './admin-info.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../../../redux/features/usersReducer';

const AdminInfo = (props) => {

  const dispatch = useDispatch()

  const handleUsers = () => {
    dispatch(getUsers())
    props.setRender('admin-users')
  }
  const handleTours = () => {
    props.setRender('admin-tours')
  }
  const handleAdmin = () => {
    props.setRender('main')
  }

  return (
    <div>
      <div className={ styles.back }><Link to='/'>НА ГЛАВНУЮ</Link></div>
      <div className={ styles.admin_wrapper_profile }>
        <img className={ styles.admin_profile_img} src="https://shop.opencart-russia.ru/image/data/members/series9/content-ui-img-icons-png-cs-768x768.png" alt="daun"/>
        <div className={ styles.admin_name }> ADMIN ADMIN </div>
      </div>
      <div className={ styles.admin_wrapper_nav}>
        <ul className={ styles.admin_nav }>
          <li onClick={ () => handleAdmin() }>ИНФОРМАЦИЯ О САЙТЕ</li>
          <li onClick={ () => handleUsers() }>СПИСОК ПОЛЬЗОВАТЕЛЕЙ</li>
          <li onClick={ () => handleTours()}>СПИСОК ТУРОВ</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminInfo;