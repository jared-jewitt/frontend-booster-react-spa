import React from 'react';

import { useAuth } from '@/hooks';

const LoginPage = () => {
  const { updateAuthState } = useAuth();

  return (
    <div className="login">
      <h1 className="login__title">Basic React App - Login</h1>
      <button
        className="login__login-btn"
        onClick={() => updateAuthState({ username: 'foo' })}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
