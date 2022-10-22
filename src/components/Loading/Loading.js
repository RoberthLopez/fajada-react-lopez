import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <ReactLoading type="spin" color="#BF125D" />
    </div>
  );
};

export default Loading;