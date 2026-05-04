import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './root.css'

const Root = () => {
  return (
    <div>
      <Header></Header>

      <div className='root-main'>
        
        <Sidebar></Sidebar>
        
      </div>

      <Footer />
    </div>
  );
};

export default Root;