import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const NotFoundPage = () => (
  <Fragment>
    <p>Not found.</p>
    <Link to={Routes.HOME}>Go to Home</Link>
  </Fragment>
);

export default NotFoundPage;
