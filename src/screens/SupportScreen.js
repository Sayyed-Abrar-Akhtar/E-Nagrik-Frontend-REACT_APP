import React from 'react';
import Btn from '../components/Btn';
import InputField from '../components/InputField';

const SupportScreen = () => {
  return (
    <section className='support-screen'>
      <h1 className='support-heading'>Send us your query</h1>
      <form
        action='https://formspree.io/f/mvodlger'
        method='POST'
        className='register-form'
      >
        <section className='input-fields-box'>
          <InputField inputType='text' placeholder='Name' />

          <InputField inputType='email' placeholder='Email' />
          <InputField inputType='text' placeholder='Contact' />
          <InputField inputType='text' placeholder='Subject' />
          <InputField inputType='text' placeholder='Address' />
        </section>
        <textarea
          id='support-text'
          className='complain-textarea'
          placeholder='Your Message'
        ></textarea>
        <Btn classes='btn btn--primary' text='send' idName='support-btn' />
      </form>
    </section>
  );
};

export default SupportScreen;
