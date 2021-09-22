import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const InfoList = ({ informations, type = 'notice' }) => {
  return (
    <section className='notice-lists'>
      {informations.map((information, index) => (
        <p
          className='notice-list'
          key={index}
          id={
            type === 'news'
              ? `news-list-${index + 1}`
              : `notice-list-${index + 1}`
          }
        >
          <FaLongArrowAltRight className='notice-icon' />
          {information.info}
        </p>
      ))}
    </section>
  );
};

export default InfoList;
