import React from 'react';
import Header from './Components/Layout/Header/Header';
import './app.module.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Main from './Components/Pages/Main/Main';
import Company from './Components/Pages/Company/Company';
import Profile from './Components/Pages/Profile/Profile';
import Authorization from './Components/Pages/Authorization/Authorization';
import Contacts from './Components/Pages/Contacts/Contacts';
import Info from './Components/Pages/Info/Info';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/company' element={<Company />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/authorization' element={<Authorization />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/info' element={<Info />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;