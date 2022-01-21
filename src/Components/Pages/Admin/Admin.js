import React, { useState } from 'react';
import styles from './admin.module.css'
import AdminInfo from './Admin-Info/Admin-Info';
import { Outlet } from 'react-router-dom';
import AdminMain from './Admin-Main/Admin-Main';
import AdminUsers from './Admin-Users/Admin-Users';
import AdminTours from './Admin-Tours/Admin-Tours';

const Admin = () => {

  const [render, setRender] = useState('main')

  return (
    <div className={ styles.admin_main }>
      <AdminInfo setRender={ setRender} />
      { render === 'main' ? <AdminMain /> : render === 'admin-users' ? <AdminUsers /> : <AdminTours />}
    </div>
  );
};

export default Admin;