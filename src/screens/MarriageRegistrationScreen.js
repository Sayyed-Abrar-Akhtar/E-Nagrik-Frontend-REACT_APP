import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMarriage } from '../actions/marriageRegistrationActions';
import Btn from '../components/Btn';
import Dialog from '../components/Dialog';
import InputField from '../components/InputField';
import MessageBar from '../components/MessageBar';
import { MARRIAGE_REGISTRATION_RESET } from '../constants/marriageRegistrationConstants';

const MarriageRegistrationScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.savedMarriage
  );

  const [bridegroomName, setBridegroomName] = useState('');
  const [brideName, setBrideName] = useState('');
  const [bridegroomDOB, setBridegroomDOB] = useState('');
  const [brideDOB, setBrideDOB] = useState('');
  const [bridegroomCtznNum, setBridegroomCtznNum] = useState('');
  const [brideCtznNum, setBrideCtznNum] = useState('');
  const [bridegroomPermanentAddress, setBridegroomPermanentAddress] =
    useState('');
  const [bridePermanentAddress, setBridePermanentAddress] = useState('');
  const [bridegroomFatherName, setBridegroomFatherName] = useState('');
  const [brideFatherName, setBrideFatherName] = useState('');
  const [bridegroomMotherName, setBridegroomMotherName] = useState('');
  const [brideMotherName, setBrideMotherName] = useState('');
  const [bridegroomGrandfatherName, setBridegroomGrandfatherName] =
    useState('');
  const [brideGrandfatherName, setBrideGrandfatherName] = useState('');

  useEffect(() => {
    if (success) {
      const setTimer = setTimeout(() => {
        dispatch({ type: MARRIAGE_REGISTRATION_RESET });
        history.push('/');
      }, 3000);

      return () => clearTimeout(setTimer);
    }
  }, [success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const marriageObj = {
      bridegroom_name: bridegroomName,
      bride_name: brideName,
      bridegroom_dob: bridegroomDOB,
      bride_dob: brideDOB,
      bridegroom_citizenship_num: bridegroomCtznNum,
      bride_citizenship_num: brideCtznNum,
      bridegroom_permanent_address: bridegroomPermanentAddress,
      bride_permanent_address: bridePermanentAddress,
      bridegroom_father_name: bridegroomFatherName,
      bride_father_name: brideFatherName,
      bridegroom_mother_name: bridegroomMotherName,
      bride_mother_name: brideMotherName,
      bridegroom_grandfather_name: bridegroomGrandfatherName,
      bride_grandfather_name: brideGrandfatherName,
    };

    dispatch(saveMarriage(marriageObj));
  };

  return (
    <section className='register-screen'>
      <h1 className='register-heading'>Marriage Registration</h1>
      <form onSubmit={(e) => submitHandler(e)} className='register-form'>
        <section className='input-fields-box'>
          <InputField
            inputType='text'
            placeholder='Bridegroom Name'
            val={bridegroomName}
            setVal={setBridegroomName}
          />
          <InputField
            inputType='text'
            placeholder='Bride Name'
            val={brideName}
            setVal={setBrideName}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Date of Birth'
            val={bridegroomDOB}
            setVal={setBridegroomDOB}
          />
          <InputField
            inputType='text'
            placeholder='Bride Date of Birth'
            val={brideDOB}
            setVal={setBrideDOB}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Citizenship Number'
            val={bridegroomCtznNum}
            setVal={setBridegroomCtznNum}
          />
          <InputField
            inputType='text'
            placeholder='Bride Citizenship Number'
            val={brideCtznNum}
            setVal={setBrideCtznNum}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Permanent Address'
            val={bridegroomPermanentAddress}
            setVal={setBridegroomPermanentAddress}
          />
          <InputField
            inputType='text'
            placeholder='Bride Permanent Address'
            val={bridePermanentAddress}
            setVal={setBridePermanentAddress}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Father Name'
            val={bridegroomFatherName}
            setVal={setBridegroomFatherName}
          />
          <InputField
            inputType='text'
            placeholder='Bride Father Name'
            val={brideFatherName}
            setVal={setBrideFatherName}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Mother Name'
            val={bridegroomMotherName}
            setVal={setBridegroomMotherName}
          />
          <InputField
            inputType='text'
            placeholder='Bride Mother Name'
            val={brideMotherName}
            setVal={setBrideMotherName}
          />
          <InputField
            inputType='text'
            placeholder='Bridegroom Grandfather Name'
            val={bridegroomGrandfatherName}
            setVal={setBridegroomGrandfatherName}
          />
          <InputField
            inputType='text'
            placeholder='Bride Grandfather Name'
            val={brideGrandfatherName}
            setVal={setBrideGrandfatherName}
          />
        </section>

        {loading ? (
          <Btn classes='btn btn--primary' text='Loading...' />
        ) : (
          <Btn classes='btn btn--primary' text='register' />
        )}
      </form>
      {error && <MessageBar type='error' text={error} />}
      {success && <Dialog type='success' text='Registration Successful' />}
    </section>
  );
};

export default MarriageRegistrationScreen;
