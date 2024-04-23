import React, { useState } from 'react';
import ConfirmationMessage from '../../Alert/ConfirmationMessage';

const Button = ({ onClick, darkMode }) => {
  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = () => {
    onClick();
    if (darkMode) {
      setSavedMessage('Modo oscuro guardado');
    } else {
      setSavedMessage('Modo claro guardado');
    }
  
    setTimeout(() => {
      setSavedMessage('');
    }, 3000);
  };

  return (
    <section className="relative flex flex-col items-center mt-9">
      <button className="btn mb-2 w-[281px] h-[48px] btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]" onClick={handleSave}>
        Guardar
      </button>
      {savedMessage && <ConfirmationMessage message={savedMessage} />} 
    </section>
  );
};

export default Button;