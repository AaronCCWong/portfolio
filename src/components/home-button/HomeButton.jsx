import React from 'react';
import { Link } from 'react-router-dom';

import './HomeButton.scss';

const HomeButton = () => (
  <Link to="/" className="home-btn">
    <i className="fa fa-home fa-2x" aria-hidden="true" />
  </Link>
);

export default HomeButton;
