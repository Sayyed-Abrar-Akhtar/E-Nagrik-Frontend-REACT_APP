import React from 'react';

const InputField = ({ placeholder, inputType, val, setVal }) => {
  return (
    <section className='input-container'>
      <input
        name={val}
        type={inputType}
        id={val}
        className={`input-field`}
        placeholder={placeholder}
        onChange={(e) => setVal(e.target.value)}
        required
      />
    </section>
  );
};

export default InputField;
