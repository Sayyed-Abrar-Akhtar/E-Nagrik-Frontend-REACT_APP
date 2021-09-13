import React from 'react';

const Btn = ({ text, classes }) => {
  return (
    <section className='input-container btn-container'>
      <button className={classes}>{text}</button>
    </section>
  );
};

export default Btn;
