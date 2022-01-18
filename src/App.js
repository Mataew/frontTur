import React from 'react';
import Header from './Components/Layout/Header/Header';
import './app.module.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Main from './Components/Pages/Main/Main';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;