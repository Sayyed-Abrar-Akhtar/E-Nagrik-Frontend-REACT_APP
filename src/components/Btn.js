import React from 'react';

const Btn = ({ text, classes }) => {
  return (
    <section className='input-container btn-container'>
      <button className={classes} type='submit'>
        {text}
      </button>
    </section>
  );
};

export default Btn;
