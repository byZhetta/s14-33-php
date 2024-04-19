import React, { useState } from 'react';
import Alert from '../../../Alert/Alert';

const SendNotifications = () => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <section className="flex justify-end mr-36">
      <div className="card card-compact w-[505px] h-[139] bg-[#232442] border border-[#9308E8] xl:w-[30%] shadow-xl relative">
        <div className="card-body">
          <h2 className="card-title">ENVIAR NOTIFICACIONES</h2>
          <p>Permitir las notificaciones de actualización</p>
          <label className="absolute top-2 right-2">
            <input 
              type="checkbox" 
              className="toggle" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
          </label>
          {isChecked && <Alert type="info" message="Esta sección todavía no está disponible" />}
        </div>
      </div>
    </section>
  );
}

export default SendNotifications;