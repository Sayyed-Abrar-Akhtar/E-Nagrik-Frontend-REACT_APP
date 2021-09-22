import React from 'react';

const Dialog = ({ type, text, idName = 'register-success' }) => {
  return (
    <section
      className={
        type
          ? `dialog-container dialog--${type}`
          : 'dialog-container dialog--normal'
      }
      id={idName}
    >
      <p className='dialog-text'>{text}</p>
    </section>
  );
};

export default Dialog;
