import React from 'react';

const InputField = ({ placeholder, inputType, val, setVal }) => {
  return (
    <section className='input-container'>
      {setVal ? (
        <input
          name={val}
          type={inputType}
          id={val}
          className={`input-field`}
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          required
        />
      ) : (
        <input
          name={placeholder}
          type={inputType}
          id={placeholder}
          className={`input-field`}
          placeholder={placeholder}
          required
        />
      )}
    </section>
  );
};

export default InputField;
