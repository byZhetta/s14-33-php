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
    <section className="flex justify-center mt-9 ">
      <button className="py-3 text-white w-full md:w-64 rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8] lg:w-56" onClick={handleSave}>
        Guardar
      </button>
      {savedMessage && <ConfirmationMessage message={savedMessage} />} 
    </section>
  );
};

export default Button;