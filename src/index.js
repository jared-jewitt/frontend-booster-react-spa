import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import * as serviceWorker from './service-worker';
import '@/styles/index.scss';

import Routes from '@/routes/routes';
import { AuthProvider } from '@/providers';

const App = () => (
  <AuthProvider>
    <HashRouter basename="/">
      <Routes />
    </HashRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();
