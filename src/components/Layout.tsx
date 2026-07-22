import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  useEffect(() => {
    document.title = 'FAN, Sixing @ Personal';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'The personal website of FAN, Sixing.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container-custom">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
