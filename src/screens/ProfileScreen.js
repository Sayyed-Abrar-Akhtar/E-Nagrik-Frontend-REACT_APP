import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Btn from '../components/Btn';
import sayyed from '../assets/sayyed.jpg';
import { CITIZEN_LOGIN_RESET } from '../constants/citizenConstants';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.authorisedCitizen);

  useEffect(() => {
    if (!success) {
      history.push('/login');
    }
  }, [history, success]);

  const clickHandler = (e) => {
    dispatch({ type: CITIZEN_LOGIN_RESET });
    history.push('/');
  };

  return (
    <section className='profile-screen' id='profile-screen'>
      <section className='profile-img'>
        <img src={sayyed} alt='profile' />
      </section>
      <section className='profile-details'>
        <section className='profile-log'>
          <h2 className='profile-name'>Sayyed abrar akhtar</h2>
          <p>
            <strong>Citizen ID:</strong> 1354815
          </p>
          <p>
            <strong>Father Name:</strong> Pervez Akhtar
          </p>
          <p>
            <strong>Mother Name:</strong> Shahina Perween Akhtar
          </p>
          <p>
            <strong>Grandfather Name:</strong> __________
          </p>
          <p>
            <strong>Permanent Address:</strong> Kalaiya 08, Bara, Nepal.
          </p>
          <p>
            <strong>Date of Birth:</strong> 21/11/2000
          </p>
          <p>
            <strong>Father Name:</strong> Pervez Akhtar
          </p>
        </section>
        <section
          className='profile-log logout'
          onClick={(e) => clickHandler(e)}
        >
          <Btn classes='btn btn--error' text='logout' />
        </section>
      </section>

      <h2 className='appointment-heading'>Appointment Details</h2>
      <section className='appointment-details'>
        <p>
          <strong>Registration status:</strong>On process
        </p>
        <p>
          <strong>Appointment Date:</strong>10/11/2021
        </p>
        <p>
          <strong>Appointment for:</strong>Original Documents Submission
        </p>
      </section>
    </section>
  );
};

export default ProfileScreen;
