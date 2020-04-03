import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const NotFound = () => (
  <Fragment>
    <p>404 - Not found</p>
    <Link to={Routes.HOME}>Go to Home</Link>
  </Fragment>
);

export default NotFound;
