import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/providers';
import * as serviceWorker from './serviceWorker';

import Routes from '@/routes/routes';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.unregister();