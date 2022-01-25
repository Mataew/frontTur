import React, { useEffect } from 'react';
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
import Admin from './Components/Pages/Admin/Admin';
import { useDispatch } from 'react-redux';
import { getUsers } from './redux/features/usersReducer';
import Hotels from './Components/Pages/Hotels/Hotels';
import AdminLayout from './Components/Pages/Admin/Admin-Layout';
import AddTour from './Components/Pages/Admin/Admin-Tours/Add-Tour';
import AdminInfo from './Components/Pages/Admin/Admin-Info/Admin-Info';
import AdminTours from './Components/Pages/Admin/Admin-Tours/Admin-Tours';
import AdminUsers from './Components/Pages/Admin/Admin-Users/Admin-Users';
import AdminMain from './Components/Pages/Admin/Admin-Main/Admin-Main';

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  })

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
          <Route path='/hotels' element={<Hotels />}/>
        </Route>
        <Route path='/admin' element={ <AdminLayout/>}>
          <Route path='/admin' element={ <AdminMain/>}/>
          <Route path='/admin/adminTours' element={<AdminTours/>}/>
          <Route path='/admin/adminUsers' element={<AdminUsers/>}/>
          <Route path='/admin/addTours' element={<AddTour/>}/>
        </Route>
      </Routes>

      {/*<Routes>*/}
      {/*  <Route path='/admin' element={ <AdminLayout/>}>*/}
      {/*    <Route path='/admin' element={ <AdminMain/>}/>*/}
      {/*    <Route path='/adminTours' element={<AdminTours/>}/>*/}
      {/*    <Route path='/adminUsers' element={<AdminUsers/>}/>*/}
      {/*  </Route>*/}
      {/*</Routes>*/}

    </div>
  );
};

export default App;