import React from 'react';
import { Link } from 'react-router-dom';
import { menuObjArr } from '../data/menu';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className='header' id='header'>
      <section className='logo-box'>
        <Link to='/'>
          <img src={logo} className='logo' alt='logo' />
        </Link>
      </section>
      <nav className='nav'>
        {menuObjArr.map((menu, index) => (
          <p key={index} className='nav-menu'>
            <Link to={menu.link} className='nav-link'>
              {menu.name}
            </Link>
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Header;
