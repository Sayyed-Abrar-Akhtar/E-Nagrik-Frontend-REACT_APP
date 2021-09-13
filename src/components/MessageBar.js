import React from 'react';

const MessageBar = ({ type, text }) => {
  return (
    <section className='message-bar'>
      <p className={`message-text${type && ` text-`}${type}`}>{text}</p>
    </section>
  );
};

export default MessageBar;
