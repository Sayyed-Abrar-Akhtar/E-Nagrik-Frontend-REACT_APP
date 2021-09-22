import React from 'react';

const RadioBtn = ({
  group,
  lbl,
  val,
  setVal,
  lbl1,
  val1,
  setVal1,
  lbl2,
  val2,
  setVal2,
  lbl3,
  val3,
  setVal3,
}) => {
  return (
    <section className='input-container radio-container'>
      <section className='radio-options'>
        <input
          type='radio'
          id={lbl}
          name={group}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <label htmlFor={lbl} id={`label-${lbl}`}>
          {lbl}
        </label>
      </section>
      <section className='radio-options'>
        <input
          type='radio'
          id={lbl1}
          name={group}
          value={val1}
          onChange={(e) => setVal1(e.target.value)}
        />
        <label htmlFor={lbl1} id={`label-${lbl1}`}>
          {lbl1}
        </label>
      </section>
      {val2 && (
        <section className='radio-options'>
          <input
            type='radio'
            id={lbl2}
            name={group}
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
          <label htmlFor={lbl2} id={`label-${lbl2}`}>
            {lbl2}
          </label>
        </section>
      )}
      {val3 && (
        <section className='radio-options'>
          <input
            type='radio'
            id={lbl3}
            name={group}
            value={val3}
            onChange={(e) => setVal3(e.target.value)}
          />
          <label htmlFor={lbl3} id={`label-${lbl3}`}>
            {lbl3}
          </label>
        </section>
      )}
    </section>
  );
};

export default RadioBtn;
