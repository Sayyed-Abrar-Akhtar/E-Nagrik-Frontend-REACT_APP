import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProfileScreen = ({ history }) => {
  const { success } = useSelector((state) => state.authorisedCitizen);

  useEffect(() => {
    if (!success) {
      history.push('/login');
    }
  }, [history, success]);

  return <section className='profile-screen'>profile screen</section>;
};

export default ProfileScreen;
