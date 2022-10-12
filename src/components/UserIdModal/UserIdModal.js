import React from 'react';
import ReactDOM from 'react-dom';

const UserIdModal = ({children}) => {
  return ReactDOM.createPortal(
    <div className='flex fixed inset-2.5 justify-center items-center align-center text-white bg-neutral-500/70'>{children}</div>, document.getElementById('modal')
  );
};

export default UserIdModal;