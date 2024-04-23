import React, { useState } from 'react';
import realizado from '../assets/realizado.png';

const ButtonMarkAsDone = () => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(true);
    alert('¡Felicitaciones por completar el ejercicio!');
  };

  return (
    <button
      className={`btn btn-wide bg-gradient-to-r from-purple-700 to-indigo-500 hover:from-indigo-500 hover:to-purple-700 ${isDone ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ position: 'relative', top: '-90px', left: '540px'}}
      onClick={handleClick}
      disabled={isDone}
    >
      {isDone ? 'Realizado' : 'Marcar como realizado'}
      {isDone && <img src={realizado} alt="realizado" />}
    </button>
  );
};

export default ButtonMarkAsDone;