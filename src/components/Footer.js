import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <p className='footer-text'>
        Designed and developed with{' '}
        <span>
          <FaHeart className='footer-heart' />
        </span>
      </p>
      <p className='footer-text'>for the STW303COM Individual Project</p>
      <p className='footer-text'>
        <strong>Coventry University</strong>
      </p>
      <p className='footer-text'>
        <span className='author'>
          &copy; Sayyed Abrar Akhtar {new Date().getFullYear()}.
        </span>
      </p>
    </section>
  );
};

export default Footer;
