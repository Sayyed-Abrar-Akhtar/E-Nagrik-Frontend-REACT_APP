import React from 'react';

const InputField = ({ placeholder, inputType, val, setVal, isRegExpValid }) => {
  const idVal = placeholder.replaceAll(' ', '-').toLowerCase();
  return (
    <section className='input-container'>
      {setVal ? (
        isRegExpValid ? (
          <input
            name={idVal}
            type={inputType}
            id={idVal}
            pattern='^[a-zA-Z ]*$'
            title='Only text are allowed'
            className={`input-field`}
            placeholder={placeholder}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            required
          />
        ) : (
          <input
            name={idVal}
            type={inputType}
            id={idVal}
            className={`input-field`}
            placeholder={placeholder}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            required
          />
        )
      ) : isRegExpValid ? (
        <input
          name={idVal}
          type={inputType}
          id={idVal}
          pattern='^[a-zA-Z ]*$'
          title='Only text are allowed'
          className={`input-field`}
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          name={idVal}
          type={inputType}
          id={idVal}
          className={`input-field`}
          placeholder={placeholder}
          required
        />
      )}
    </section>
  );
};

export default InputField;
