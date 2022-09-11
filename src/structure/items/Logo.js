import React from 'react';
import '../styles/logo.css';

const Logo = ({ classes, source, href, alt }) => (
  <a className={classes[0]} href={href}>
    <img className={classes[1]} src={source} alt={alt} />
  </a>
);

export default Logo;
