import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Tour from './Tour';
import ScrollProgress from './ScrollProgress';
import '../App.css';

function Layout() {
  const [tourOpen, setTourOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ScrollProgress />
      <Navbar
        onTour={() => setTourOpen(true)}
      />
      <main
        className="page-bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-cta.gif)` }}
      >
        <Outlet />
      </main>
      <Footer />
      {tourOpen && (
        <Tour
          onClose={() => {
            setTourOpen(false);
            navigate('/');
          }}
        />
      )}
    </>
  );
}

export default Layout;
