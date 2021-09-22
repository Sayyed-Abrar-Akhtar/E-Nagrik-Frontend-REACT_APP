import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Btn from '../components/Btn';
import InputField from '../components/InputField';
import RadioBtn from '../components/RadioBtn';
import MessageBar from '../components/MessageBar';
import { BIRTH_REGISTRATION_RESET } from '../constants/birthRegistrationConstants';
import { saveBirth } from '../actions/birthRegistrationActions';
import Dialog from '../components/Dialog';

const BirthRegistrationScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.savedBirth);

  const [childName, setChildName] = useState('');
  const [gender, setGender] = useState('');
  const [DOB, setDOB] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [grandfatherName, setGrandfatherName] = useState('');
  const [fatherId, setFatherId] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherId, setMotherId] = useState('');
  const [motherName, setMotherName] = useState('');
  const [informantId, setInformantId] = useState('');
  const [informantName, setInformantName] = useState('');

  useEffect(() => {
    if (success) {
      const setTimer = setTimeout(() => {
        dispatch({ type: BIRTH_REGISTRATION_RESET });
        history.push('/');
      }, 3000);

      return () => clearTimeout(setTimer);
    }
  }, [success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const birthRecordObj = {
      child_name: childName,
      gender,
      dob: DOB,
      birth_place: birthPlace,
      permanent_address: permanentAddress,
      grandfather_name: grandfatherName,
      father_id: fatherId,
      father_name: fatherName,
      mother_id: motherId,
      mother_name: motherName,
      informant_id: informantId,
      informant_name: informantName,
    };

    dispatch(saveBirth(birthRecordObj));
  };

  return (
    <section className='register-screen'>
      <h1 className='register-heading'>Birth Registration</h1>
      <form onSubmit={(e) => submitHandler(e)} className='register-form'>
        <section className='input-fields-box'>
          <InputField
            inputType='text'
            placeholder='Child Name'
            val={childName}
            setVal={setChildName}
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
            placeholder='Date of Birth'
            val={DOB}
            setVal={setDOB}
          />
          <InputField
            inputType='text'
            placeholder='Permanent Address'
            val={permanentAddress}
            setVal={setPermanentAddress}
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
            placeholder='Grandfather Name'
            val={grandfatherName}
            setVal={setGrandfatherName}
            isRegExpValid={true}
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
            placeholder='Father ID Number'
            val={fatherId}
            setVal={setFatherId}
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
            placeholder='Mother ID Number'
            val={motherId}
            setVal={setMotherId}
          />
          <InputField
            inputType='text'
            placeholder='Informant Name'
            val={informantName}
            setVal={setInformantName}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Informant ID Number'
            val={informantId}
            setVal={setInformantId}
          />
        </section>

        {loading ? (
          <Btn classes='btn btn--primary' text='Loading...' />
        ) : (
          <Btn
            classes='btn btn--primary'
            text='register'
            idName='birth-register-btn'
          />
        )}
      </form>
      {error && <MessageBar type='error' text={error} />}
      {success && (
        <Dialog
          type='success'
          text='Registration Successful'
          idName='birth-register-success'
        />
      )}
    </section>
  );
};

export default BirthRegistrationScreen;
