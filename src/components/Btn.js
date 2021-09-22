import React from 'react';

const Btn = ({ text, classes, idName = 'btn' }) => {
  return (
    <section className='input-container btn-container'>
      <button className={classes} type='submit' id={idName}>
        {text}
      </button>
    </section>
  );
};

export default Btn;
