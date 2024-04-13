import React, { useState, useEffect } from 'react';
import useTimer from './TimerHook/TimerHook';
import ButtonPlay from '../BotonPlay/ButtonPlay';
import ButtonStop from '../BotonParar/ButtonStop';

const ButtonCounterMinutes = () => {
  const { timerRunning, minutes, seconds, startTimer, stopTimer } = useTimer();

  return (
    <>
      <div className="flex justify-between items-center" style={{ position: 'relative', top: '-180px', left: '730px' }}>
        <div className="p-5 w-215 h-65 bg-base-200 rounded-xl border-2 z-10 flex items-center justify-center transform transition-transform hover:scale-110" style={{ borderImage: 'linear-gradient(45deg, rgba(17, 0, 207, 1), rgba(147, 8, 232, 1)) 1' }}>
          <span className="countdown font-mono text-2xl">
            Tiempo: {minutes < 10 ? `0${minutes}` : minutes} min {seconds < 10 ? `0${seconds}` : seconds} seg
          </span>
        </div>
        <div className="flex space-x-4 ml-28">
          <ButtonPlay onClick={startTimer} />
          <ButtonStop onClick={stopTimer} />
        </div>
      </div>
    </>
  );
};

export default ButtonCounterMinutes;