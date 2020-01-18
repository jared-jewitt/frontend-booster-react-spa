import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@/hooks';
import { Routes } from '@/constants';

const HomePage = () => {
  const { clearAuthState } = useAuth();
  
  return (
    <div className="home">
      <h1 className="home__title">Basic React App - Home</h1>
      <Link className="home__nav-link" to={Routes.ABOUT_US}>Go to About Us</Link>
      <button className="home__logout-btn" onClick={clearAuthState}>Logout</button>
    </div>
  );
};

export default HomePage;
