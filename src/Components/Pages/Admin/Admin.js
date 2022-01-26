import React, { useState } from 'react';
import styles from './admin.module.css'
import AdminInfo from './Admin-Info/Admin-Info';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './Admin-Layout';
import AdminTours from './Admin-Tours/Admin-Tours';
import AdminUsers from './Admin-Users/Admin-Users';

const Admin = () => {
  return (
    <div className={ styles.admin_main }>
      <AdminInfo />
    </div>


  );
};

export default Admin;