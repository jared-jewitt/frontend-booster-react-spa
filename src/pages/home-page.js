import React from 'react';

import { useAuth } from '@/hooks';

const HomePage = () => {
  const { clearAuthState } = useAuth();
  return (
    <div className="home">
      <h1 className="home__title">Home - CI/CD is awesome :)</h1>
      <button
        className="home__logout-btn"
        onClick={clearAuthState}
      >
        Simulate logout
      </button>
    </div>
  );
};

export default HomePage;
