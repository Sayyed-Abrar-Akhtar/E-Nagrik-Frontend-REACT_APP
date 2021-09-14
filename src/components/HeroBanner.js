import React from 'react';
import herobanner from '../assets/herobanner.jpg';
import { CTA, SUBTITLE, TITLE } from '../constants/heroConstants';

const HeroBanner = ({ link }) => {
  return (
    <section className='hero-banner'>
      <img src={herobanner} alt='hero' className='hero-img' />
      <section className='hero-caption'>
        <h1 className='caption-title'>{TITLE}</h1>
        <p className='caption-subtitle'>{SUBTITLE}</p>
        <a href={link} className='hero-cta btn btn--primary'>
          {CTA}
        </a>
      </section>
    </section>
  );
};

export default HeroBanner;
