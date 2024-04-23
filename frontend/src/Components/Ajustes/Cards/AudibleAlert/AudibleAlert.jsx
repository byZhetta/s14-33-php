import React, { useState } from 'react';
import Alert from '../../../Alert/Alert';

const AudibleAlert = () => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <section className="">
      <div className="card card-compact bg-color3 text-white dark:bg-color4 border border-[#9308E8] shadow-xl lg:w-[20rem]">
        <div className="p-3">
          <div className=' flex items-center justify-between'>
            <h2 className="card-title dark:text-black text-sm xl:text-base">ALERTA SONORA</h2>
            <input 
              type="checkbox" 
              className="toggle" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
          </div>
          <p className="dark:text-black pb-2 text-sm xl:text-base">Activar el sonido al terminar el temporizador</p>
          {isChecked && <Alert type="info" message="Esta sección todavía no está disponible" />}
        </div>
      </div>
    </section>
  );
};

export default AudibleAlert;