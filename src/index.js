import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '@/styles/index.scss';

import Routes from '@/routes';
import { AuthProvider } from '@/providers';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
