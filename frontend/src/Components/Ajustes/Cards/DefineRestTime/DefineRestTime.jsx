import React, { useState } from 'react';
import Alert from '../../../Alert/Alert';

const DefineRestTime = () => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <section className="flex justify-end mr-36">
      <div className="card card-compact w-[505px] h-[163px] bg-[#232442] border border-[#9308E8] xl:w-[30%] shadow-xl relative">
        <div className="card-body">
          <h2 className="card-title">DEFINIR TIEMPO DESCANSO</h2>
          <p>Tiempo en segundos entre cada repetición</p>
          <label className="absolute top-2 right-2">
            <input 
              type="checkbox" 
              className="toggle" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
          </label>
          {isChecked && <Alert type="info" message="Esta sección todavía no está disponible" />}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">40s</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DefineRestTime;
