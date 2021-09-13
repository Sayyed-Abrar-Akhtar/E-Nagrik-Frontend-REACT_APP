import React, { useState } from 'react';
import Btn from '../components/Btn';
import InputField from '../components/InputField';
import loginbnr from '../assets/loginbnr.jpg';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  const [ctznNum, setCtznNum] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='login-screen'>
      <section className='login-img'>
        <a href='https://www.freepik.com/vectors/people'>
          <img src={loginbnr} alt='login-banner' className='login-bnr-img' />
        </a>
      </section>
      <section className='login-form'>
        <h1 className='login-heading'>Citizen Login</h1>
        <form action=''>
          <InputField
            inputType='text'
            placeholder='Citizen Number'
            val={ctznNum}
            setVal={setCtznNum}
          />
          <InputField
            inputType='password'
            placeholder='Password'
            val={password}
            setVal={setPassword}
          />

          <Btn classes='btn btn--primary' text='login' />

          <p className='register-link'>
            Do not have an account? <Link to='/register'>Register here</Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default LoginScreen;
