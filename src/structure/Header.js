import React from 'react';
import Top from './items/Top.js';
import CreateList from '../utils/CreateList.js';
import './styles/header.css';

const Header = () => {
  return (
    <header className="Header">
      <Top />
      <nav className="navbar">
        <CreateList
          listNames={['Home', 'About', 'Projects', 'Skills', 'Contact']}
          classes={['unordered-list', 'lists', 'lists__anchor']}
        />
      </nav>
    </header>
  );
};

export default Header;
