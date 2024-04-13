import { useState, useEffect } from 'react';

const useTimer = () => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setMinutes(30);
    setSeconds(0);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            stopTimer();
            return;
          }
          setMinutes(prevMinutes => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, minutes, seconds]);

  return { timerRunning, minutes, seconds, startTimer, stopTimer };
};

export default useTimer;