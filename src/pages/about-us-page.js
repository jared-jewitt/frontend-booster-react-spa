import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const AboutUsPage = () => (
  <div className="about-us">
    <h1 className="about-us__title">Basic React App - About Us</h1>
    <Link className="about-us__nav-link" to={Routes.HOME}>Go to Home</Link>
  </div>
);

export default AboutUsPage;
