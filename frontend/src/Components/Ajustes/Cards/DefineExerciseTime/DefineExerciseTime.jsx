import React, { useState } from 'react';
import Alert from '../../../Alert/Alert'; 

const DefineExerciseTime = () => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <section className="">
      <div className="card card-compact bg-color3 text-white dark:bg-color4 border border-[#9308E8] shadow-xl lg:w-[20rem]">
        <div className="p-3">
          <div className=' flex items-center justify-between'> 
            <h2 className="card-title dark:text-black text-sm xl:text-base">DEFINIR TIEMPO EJERCICIO</h2>
            <input 
            type="checkbox" 
            className="toggle" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
          />
          </div>
          <p className="dark:text-black pb-2 text-sm xl:text-base">Recordá que para cada ejercicio se recomiendan 12 repeticiones</p>
          {isChecked && <Alert type="info" message="Esta sección todavía no está disponible" />}
          <div className="card-actions justify-end">
            <button className="btn btn-primary my-2">120s</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DefineExerciseTime;