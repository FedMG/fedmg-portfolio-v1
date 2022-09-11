import React from 'react';
import '../styles/nav.css';

const Nav = ({ classes, children }) => (
  <nav className={classes[0]}>
    <ul className={classes[1]}>{children}</ul>
  </nav>
);

export default Nav;
