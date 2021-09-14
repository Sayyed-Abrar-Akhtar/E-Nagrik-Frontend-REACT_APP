import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ history }) => {
  const { success } = useSelector((state) => state.authorisedCitizen);

  useEffect(() => {
    if (!success) {
      history.push('/login');
    }
  }, [history, success]);

  return (
    <section className='profile-screen'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />{' '}
      <strong style={{ textAlign: 'center', display: 'block' }}>
        Under development
      </strong>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default ProfileScreen;
