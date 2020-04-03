import React from 'react';

import { useAuth } from '@/hooks';

const Login = () => {
  const { updateAuthState } = useAuth();
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <button
        className="login__login-btn"
        onClick={() => updateAuthState({ user: { name: 'Foo Bar' } })}
      >
        Simulate login
      </button>
    </div>
  );
};

export default Login;
