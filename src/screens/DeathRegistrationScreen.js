import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveDeath } from '../actions/deathRegistrationActions';
import Btn from '../components/Btn';
import Dialog from '../components/Dialog';
import InputField from '../components/InputField';
import MessageBar from '../components/MessageBar';
import RadioBtn from '../components/RadioBtn';
import { DEATH_REGISTRATION_RESET } from '../constants/deathRegistrationConstants';

const DeathRegistrationScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.savedDeath);

  const [deceasedName, setDeceasedName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [diedOn, setDiedOn] = useState('');
  const [deathPlace, setDeathPlace] = useState('');
  const [birthCountry, setBirthCountry] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [education, setEducation] = useState('');
  const [religion, setReligion] = useState('');
  const [grandfatherName, setGrandfatherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [deathCause, setDeathCause] = useState('');
  const [informantName, setInformantName] = useState('');
  const [informantRelation, setInformantRelation] = useState('');
  const [informantAddress, setInformantAddress] = useState('');

  useEffect(() => {
    if (success) {
      const setTimer = setTimeout(() => {
        dispatch({ type: DEATH_REGISTRATION_RESET });
        history.push('/');
      }, 3000);

      return () => clearTimeout(setTimer);
    }
  }, [success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const deathObj = {
      deceased_name: deceasedName,
      gender,
      age,
      died_on: diedOn,
      death_place: deathPlace,
      birth_country: birthCountry,
      citizen_id: citizenId,
      permanent_address: permanentAddress,
      marital_status: maritalStatus,
      education,
      religion,
      grandfather_name: grandfatherName,
      father_name: fatherName,
      spouse_name: spouseName,
      death_cause: deathCause,
      informant_name: informantName,
      informant_relation: informantRelation,
      informant_address: informantAddress,
    };

    dispatch(saveDeath(deathObj));
  };

  return (
    <section className='register-screen'>
      <h1 className='register-heading'>Death Registration</h1>
      <form onSubmit={(e) => submitHandler(e)} className='register-form'>
        <section className='input-fields-box'>
          <InputField
            inputType='text'
            placeholder='Deceased Name'
            val={deceasedName}
            setVal={setDeceasedName}
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
            inputType='number'
            placeholder='Age'
            val={age}
            setVal={setAge}
            min='1'
          />
          <InputField
            inputType='date'
            placeholder='Died on'
            val={diedOn}
            setVal={setDiedOn}
          />

          <InputField
            inputType='text'
            placeholder='Death Place'
            val={deathPlace}
            setVal={setDeathPlace}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Country of Birth'
            val={birthCountry}
            setVal={setBirthCountry}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Citizen Id'
            val={citizenId}
            setVal={setCitizenId}
          />
          <InputField
            inputType='text'
            placeholder='Permanent Address'
            val={permanentAddress}
            setVal={setPermanentAddress}
          />
          <InputField
            inputType='text'
            placeholder='Marital Status'
            val={maritalStatus}
            setVal={setMaritalStatus}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Education'
            val={education}
            setVal={setEducation}
          />
          <InputField
            inputType='text'
            placeholder='Religion'
            val={religion}
            setVal={setReligion}
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
            placeholder='Spouse Name'
            val={spouseName}
            setVal={setSpouseName}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Cause of Death'
            val={deathCause}
            setVal={setDeathCause}
            isRegExpValid={true}
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
            placeholder='Informant relation with deceased'
            val={informantRelation}
            setVal={setInformantRelation}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Informant Address'
            val={informantAddress}
            setVal={setInformantAddress}
          />
        </section>

        {loading ? (
          <Btn classes='btn btn--primary' text='Loading...' />
        ) : (
          <Btn
            classes='btn btn--primary'
            text='register'
            idName='death-register-btn'
          />
        )}
      </form>
      {error && <MessageBar type='error' text={error} />}
      {success && (
        <Dialog
          type='success'
          text='Registration Successful'
          idName='death-register-success'
        />
      )}
    </section>
  );
};

export default DeathRegistrationScreen;
