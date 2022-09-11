import React from 'react';
import Top from './items/Top.js';
import Logo from './items/Logo.js';
import CreateList from '../utils/CreateList.js';
import './styles/header.css';

const Header = () => {
  return (
    <header className="Header">
      <Top />
      <nav className="navbar">
        <div className="Logo-container">
          <Logo
            classes={['Logo-anchor', 'Logo-anchor__image']}
            href="#Home"
            alt="portfolio logo"
            source="https://img.icons8.com/nolan/64/folder-invoices.png"
          />
        </div>
        {/* <div className="lists-wrapper"> */}
        <CreateList
          listNames={['Home', 'About', 'Projects', 'Skills', 'Contact']}
          classes={['unordered-list', 'lists', 'lists__anchor']}
        />
        {/* </div> */}
      </nav>
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
