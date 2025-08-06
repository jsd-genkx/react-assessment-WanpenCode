import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
      >
        Home
      </Link>
      <Link 
        to="/owner" 
        className={location.pathname === '/owner' ? 'nav-link active' : 'nav-link'}
      >
        Owner
      </Link>
    </nav>
  );
}

export default Navigation;