import React from 'react';

import { useAuth } from '@/hooks';

export default () => {
  const { updateAuthState } = useAuth();
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <p>
        Try navigating to <code>/</code><br />
        It won&apos;t work due to private routing constraints.
      </p>
      <button
        className="login__login-btn"
        onClick={() => updateAuthState({ user: { name: 'Foo Bar' } })}
      >
        Simulate login
      </button>
    </div>
  );
};
