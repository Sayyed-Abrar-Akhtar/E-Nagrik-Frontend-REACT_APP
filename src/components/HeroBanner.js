import React from 'react';
import herobanner from '../assets/herobanner.jpg';

const HeroBanner = ({ link }) => {
  return (
    <section className='hero-banner'>
      <img src={herobanner} alt='hero image' className='hero-img' />
      <section className='hero-caption'>
        <h1 className='caption-title'>Local E-Governance</h1>
        <p className='caption-subtitle'>
          Government services that creates value.
        </p>
        <a href={link} className='hero-cta btn btn--primary'>
          Get Services Now
        </a>
      </section>
    </section>
  );
};

export default HeroBanner;
