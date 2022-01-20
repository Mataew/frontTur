import React from 'react';
import styles from './admin.module.css'

const Admin = () => {
  return (
    <div className={ styles.admin_main }>
      <input type='file' className={ styles.admin_profile_img}>

      </input>
    </div>
  );
};

export default Admin;