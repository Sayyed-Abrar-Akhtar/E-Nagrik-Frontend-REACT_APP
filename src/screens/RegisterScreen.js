import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCitizen } from '../actions/citizenActions';
import Btn from '../components/Btn';
import Dialog from '../components/Dialog';
import InputField from '../components/InputField';
import MessageBar from '../components/MessageBar';
import RadioBtn from '../components/RadioBtn';
import { CITIZEN_POST_RESET } from '../constants/citizenConstants';

const RegisterScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newCitizen);

  const [ctznName, setCtznName] = useState('');
  const [gender, setGender] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [address, setAddress] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherAddress, setFatherAddress] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherAddress, setMotherAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (success) {
      const setTimer = setTimeout(() => {
        dispatch({ type: CITIZEN_POST_RESET });
        history.push('/login');
      }, 3000);

      return () => clearTimeout(setTimer);
    }
  }, [success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      saveCitizen({
        citizen_name: ctznName,
        gender,
        birth_place: birthPlace,
        address,
        father_name: fatherName,
        father_address: fatherAddress,
        mother_name: motherName,
        mother_address: motherAddress,
        email,
        password,
      })
    );
  };

  return (
    <section className='register-screen'>
      <h1 className='register-heading'>Citizen Registration</h1>
      <form onSubmit={(e) => submitHandler(e)} className='register-form'>
        <section className='input-fields-box'>
          <InputField
            inputType='text'
            placeholder='Name'
            val={ctznName}
            setVal={setCtznName}
            isRegExpValid={true}
          />

          <RadioBtn
            lbl='male'
            val='male'
            setVal={setGender}
            lbl1='female'
            val1='female'
            setVal1={setGender}
            group='gender'
          />
          <InputField
            inputType='text'
            placeholder='Birth Place'
            val={birthPlace}
            setVal={setBirthPlace}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Address'
            val={address}
            setVal={setAddress}
          />

          <InputField
            inputType='text'
            placeholder='Father Name'
            val={fatherName}
            setVal={setFatherName}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Father Address'
            val={fatherAddress}
            setVal={setFatherAddress}
          />
          <InputField
            inputType='text'
            placeholder='Mother Name'
            val={motherName}
            setVal={setMotherName}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Mother Address'
            val={motherAddress}
            setVal={setMotherAddress}
          />
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
        </section>

        {loading ? (
          <Btn classes='btn btn--primary' text='Loading...' />
        ) : (
          <Btn
            classes='btn btn--primary'
            text='register'
            idName='citizen-register-btn'
          />
        )}
      </form>
      {error && <MessageBar type='error' text={error} />}
      {success && (
        <Dialog
          type='success'
          text='Registration Successful'
          idName='citizen-register-success'
        />
      )}
    </section>
  );
};

export default RegisterScreen;
