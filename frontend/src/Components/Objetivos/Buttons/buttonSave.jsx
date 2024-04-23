import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Guardar from '../../Alert/Guardar';

const ButtonSave = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      window.location.href = "/ejercicios-en-curso";
    }, 3000);
  };

  return (
    <div className="relative flex justify-center sm:justify-end w-full">
      {showAlert && <Guardar />}
      <Link to="#" className="btn btn-wide ml-auto bg-[#131429] border-[#9308E8] hover:bg-[#9308E8] border rounded-full text-white sm:mr-20 mt-8 sm:mt-20" onClick={handleClick}>
        GUARDAR
      </Link>
    </div>
  );
};

export default ButtonSave;