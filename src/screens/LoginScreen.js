import React, { useEffect, useState } from 'react';
import Btn from '../components/Btn';
import InputField from '../components/InputField';
import MessageBar from '../components/MessageBar';
import loginbnr from '../assets/loginbnr.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { citizenAuthorisation } from '../actions/citizenActions';

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(
    (state) => state.authorisedCitizen
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (success) {
      history.push('/profile');
    }
  }, [history, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    const citizenCredentials = {
      email,
      password,
    };

    dispatch(citizenAuthorisation(citizenCredentials));
  };

  return (
    <section className='login-screen'>
      <section className='login-img'>
        <a href='https://www.freepik.com/vectors/people'>
          <img src={loginbnr} alt='login-banner' className='login-bnr-img' />
        </a>
      </section>
      <section className='login-form'>
        <h1 className='login-heading'>Citizen Login</h1>

        <form onSubmit={(e) => submitHandler(e)}>
          <InputField
            inputType='email'
            placeholder='Email'
            val={email}
            setVal={setEmail}
          />
          <InputField
            inputType='password'
            placeholder='Password'
            val={password}
            setVal={setPassword}
          />

          {loading ? (
            <Btn classes='btn btn--primary' text='Loading...' />
          ) : (
            <Btn classes='btn btn--primary' text='login' />
          )}

          <p className='register-link'>
            Do not have an account? <Link to='/register'>Register here</Link>
          </p>
          {error && <MessageBar type='error' text={error} />}
        </form>
      </section>
    </section>
  );
};

export default LoginScreen;
