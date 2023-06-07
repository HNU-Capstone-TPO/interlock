import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';

// <main style={{ paddingTop: '50px' }}> <Outlet /> </main> 공백넣기
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main> 
        <Outlet />
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Layout;