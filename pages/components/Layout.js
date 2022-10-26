import React from 'react';
import Footer from './common/Footer';
import Header from './common/Header';

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;