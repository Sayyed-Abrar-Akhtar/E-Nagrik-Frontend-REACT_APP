import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const InfoList = ({ informations }) => {
  return (
    <section className='notice-lists'>
      {informations.map((information, index) => (
        <p className='notice-list' key={index}>
          <FaLongArrowAltRight className='notice-icon' />
          {information.info}
        </p>
      ))}
    </section>
  );
};

export default InfoList;
