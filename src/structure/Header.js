import React from 'react';
import Nav from './items/Nav.js';
import Logo from './items/Logo.js';
import CreateList from '../utils/CreateList.js';
import './styles/header.css';
import './styles/createlist.css';

const Header = () => {
  return (
    <header className="Header">
      <Nav classes={['Nav', 'Nav__unordered-list']}>
        <li className="Logo-container">
            <Logo
              classes={['Logo-anchor', 'Logo-anchor__image']}
              href="#home"
              alt="portfolio logo"
              source="https://img.icons8.com/nolan/64/folder-invoices.png"
            />
        </li>
        <div className="lists-wrapper">
        <CreateList
          listNames={['Home', 'About me', 'Projects', 'Skills', 'Contact']}
          classes={['Lists', 'Lists__anchor']}
        />
        </div>
      </Nav>
    </header>
  );
};

export default Header;
