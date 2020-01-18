import React from 'react';

import { useAuth } from '@/hooks';

const HomePage = () => {
  const { clearAuthState } = useAuth();
  
  return (
    <div className="home">
      <h1 className="home__title">Basic React App - Home</h1>
      <button className="home__logout-btn" onClick={clearAuthState}>Logout</button>
    </div>
  );
};

export default HomePage;
