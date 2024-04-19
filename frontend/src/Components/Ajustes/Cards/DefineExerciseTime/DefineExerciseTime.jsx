import React, { useState } from 'react';
import Alert from '../../../Alert/Alert'; 

const DefineExerciseTime = () => {
  const [isChecked, setIsChecked] = useState(false); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <section className="ml-36">
      <div className="card card-compact w-[505px] h-[163px] bg-[#232442] border border-[#9308E8] xl:w-[30%] shadow-xl relative">
        <div className="card-body">
          <h2 className="card-title">DEFINIR TIEMPO EJERCICIO</h2>
          <p>Recordá que para cada ejercicio se recomiendan 12 repeticiones</p>
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
            <button className="btn btn-primary">120s</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DefineExerciseTime;