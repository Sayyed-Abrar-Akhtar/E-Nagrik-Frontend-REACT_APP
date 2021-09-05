import React from 'react';
import { menuObjArr } from '../data/menu';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header class='header' id='header'>
      <section className='logo-box'>
        <img src={logo} className='logo' alt='logo' />
      </section>
      <nav className='nav'>
        {menuObjArr.map((menu, index) => (
          <p key={index}>{menu.name}</p>
        ))}
      </nav>
    </header>
  );
};

export default Header;
