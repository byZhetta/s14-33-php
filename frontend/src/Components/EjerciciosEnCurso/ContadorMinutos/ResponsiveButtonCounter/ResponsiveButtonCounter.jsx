import React from 'react';
import ButtonCounterMinutes from '../ButtonCounterMinutes';

const ResponsiveButtonCounter = () => {
  return (
    <div className="flex justify-center items-center sm:justify-start sm:items-start">
      <ButtonCounterMinutes />
    </div>
  );
};

export default ResponsiveButtonCounter;