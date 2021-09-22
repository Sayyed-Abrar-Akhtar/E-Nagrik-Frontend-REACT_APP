import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { menuObjArr } from '../data/menu';
import logo from '../logo.svg';

const Header = () => {
  const { success, error } = useSelector((state) => state.authorisedCitizen);

  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (success) {
      setLoginStatus(true);
    }
  }, [success]);

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
            <Link to={menu.link} className='nav-link' id={menu.id}>
              {menu.name}
            </Link>
          </p>
        ))}
        {!error && loginStatus ? (
          <p className='nav-menu'>
            <Link to='/profile' className='nav-link' id='menu-profile'>
              profile
            </Link>
          </p>
        ) : (
          <p className='nav-menu'>
            <Link to='/login' className='nav-link' id='menu-login'>
              login
            </Link>
          </p>
        )}
      </nav>
    </header>
  );
};

export default Header;
