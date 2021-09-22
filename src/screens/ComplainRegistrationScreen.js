import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveComplain } from '../actions/complainRegistrationActions';
import Btn from '../components/Btn';
import Dialog from '../components/Dialog';
import InputField from '../components/InputField';
import MessageBar from '../components/MessageBar';
import { COMPLAIN_REGISTRATION_RESET } from '../constants/complainRegistrationConstants';

const ComplainRegistrationScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector(
    (state) => state.savedComplain
  );

  const [ctznName, setCtznName] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [contact, setContact] = useState('');
  const [assailantName, setAssailantName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDetail, setEventDetail] = useState('');

  useEffect(() => {
    if (success) {
      const setTimer = setTimeout(() => {
        dispatch({ type: COMPLAIN_REGISTRATION_RESET });
        history.push('/');
      }, 3000);

      return () => clearTimeout(setTimer);
    }
  }, [success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const complainObj = {
      citizen_name: ctznName,
      citizen_id: citizenId,
      contact,
      assailant_name: assailantName,
      event_date: eventDate,
      event_detail: eventDetail,
    };

    dispatch(saveComplain(complainObj));
  };

  return (
    <section className='register-screen'>
      <h1 className='register-heading'>Complain Registration</h1>
      <form onSubmit={(e) => submitHandler(e)} className='register-form'>
        <section className='input-fields-box'>
          <InputField
            inputType='text'
            placeholder='Name'
            val={ctznName}
            setVal={setCtznName}
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
            placeholder='Contact'
            val={contact}
            setVal={setContact}
          />
          <InputField
            inputType='text'
            placeholder='Assailant Name'
            val={assailantName}
            setVal={setAssailantName}
            isRegExpValid={true}
          />
          <InputField
            inputType='text'
            placeholder='Event Date'
            val={eventDate}
            setVal={setEventDate}
          />
        </section>
        <textarea
          id='event-description'
          className='complain-textarea'
          placeholder='Event description'
          value={eventDetail}
          onChange={(e) => setEventDetail(e.target.value)}
        ></textarea>{' '}
        {loading ? (
          <Btn classes='btn btn--primary' text='Loading...' />
        ) : (
          <Btn
            classes='btn btn--primary'
            text='register'
            idName='complain-register-success'
          />
        )}
      </form>
      {error && <MessageBar type='error' text={error} />}
      {success && (
        <Dialog
          type='success'
          text='Registration Successful'
          idName='complain-register-success'
        />
      )}
    </section>
  );
};

export default ComplainRegistrationScreen;
