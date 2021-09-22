import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ link, imgSrc, imgAlt, text, gridClass, idName }) => {
  return (
    <section
      className={`category-container ${gridClass}`}
      id={idName ? `${idName}` : 'category-id'}
    >
      <section className='category'>
        <Link to={link} className='category-link'>
          <img src={imgSrc} alt={imgAlt} className='category-img' />
          <h2 className='category-heading'>{text}</h2>
        </Link>
      </section>
    </section>
  );
};

export default Category;
