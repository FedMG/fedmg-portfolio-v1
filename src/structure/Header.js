import React from 'react';
import Nav from './items/Nav.js';
import Logo from './items/Logo.js';
import CreateList from '../utils/CreateList.js';
import Dropdown from './items/Dropdown.js';
import './styles/header.css';
import './styles/createlist.css';

const Header = () => {
  return (
    <header className="Header">
      <Nav classes={['Nav', 'Nav__unordered-list']}>
        <li className="Logo-container">
          <Logo
            classes={['Logo-anchor', 'Logo-anchor__image']}
            href="#Home"
            alt="portfolio logo"
            source="https://img.icons8.com/nolan/64/folder-invoices.png"
          />
        </li>
        <div className="lists-wrapper">
          <CreateList
            listNames={['Home', 'About', 'Projects', 'Skills', 'Contact']}
            classes={['Lists', 'Lists__anchor']}
          />
        </div>
      </Nav>
    </header>
  );
};

export default Header;

/* 
<Dropdown
href="javascript:void(0)"
classes={[
  'Dropdown',
  'dropdown__anchor',
  'dropdown__icon',
  'dropdown__items',
]}
source="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
>
<CreateList
  listNames={['Home', 'About', 'Projects', 'Skills', 'Contact']}
  classes={['Dropdown__Lists', 'Dropdown-Lists__anchor']}
/>
</Dropdown>
*/
