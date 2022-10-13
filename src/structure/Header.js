import React from 'react';
import Top from '../items/Top.js';
import CreateList from '../utils/CreateList.js';
import '../styles/header/header.css';

const Header = () => {
  return (
    <header className="Header">
      <Top title="Fed" span="MG" />
      <nav className="navbar">
        <CreateList
          listNames={[
            { id: 1, name: 'Home' },
            { id: 2, name: 'About' },
            { id: 3, name: 'Projects' },
            { id: 4, name: 'Skills' },
            { id: 5, name: 'Contact' },
          ]}
          classes={['unordered-list', 'lists', 'lists__anchor']}
        />
      </nav>
    </header>
  );
};

export default Header;
