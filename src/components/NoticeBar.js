import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotices } from '../actions/noticeActions';

const NoticeBar = () => {
  const dispatch = useDispatch();

  const { loading, notices, error } = useSelector((state) => state.getNotices);

  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  return (
    <section className='notice-container'>
      {loading ? (
        <p className='notice-text'>Loading...</p>
      ) : error ? (
        <p className='notice-text'>Error...</p>
      ) : (
        <>
          {notices.map((notice, index) => (
            <p key={index} className='notice-text'>
              {notice.info}{' '}
            </p>
          ))}
        </>
      )}
    </section>
  );
};

export default NoticeBar;
