import React, { useState } from 'react';
import chart from '../assets/chart.png';
import chart2 from '../assets/chart2.png';
import chart3 from '../assets/chart3.png';

const Card = () => {
  const [isIntermediateEnabled, setIsIntermediateEnabled] = useState(false);
  const [isAdvancedEnabled, setIsAdvancedEnabled] = useState(false);

  const handleIntermediateClick = () => {
    setIsIntermediateEnabled(true);
    setIsAdvancedEnabled(false);
  };

  const handleAdvancedClick = () => {
    setIsIntermediateEnabled(false);
    setIsAdvancedEnabled(true);
  };

  return (
    <section className="flex justify-center mt-12">
      <h1 className="mt-[-50px] text-xl text-white dark:text-black font-bold mr-40">Intensidad</h1>
      <button>
        <div className={`card card-compact w-[293px] h-[194px] bg-gradient-to-b from-[#1100CF] to-[#9308E8] shadow-xl mr-9`}>
          <figure><img className="mt-3" src={chart} alt="chart" /></figure>
          <div className="card-body text-center">
            <h2 className="text-white">PRINCIPIANTE</h2>
          </div>
        </div>
      </button>
      <button onClick={handleIntermediateClick}>
        <div className={`card card-compact w-[293px] h-[194px] bg-gradient-to-b from-[#1100CF] to-[#9308E8] shadow-xl mr-9 ${isIntermediateEnabled ? '' : 'opacity-50 pointer-events-none'}`}>
          <figure><img className="mt-3" src={chart2} alt="chart" /></figure>
          <div className="card-body text-center">
            <h2 className="text-white">INTERMEDIO</h2>
          </div>
        </div>
      </button>
      <button onClick={handleAdvancedClick}>
        <div className={`card card-compact w-[293px] h-[194px] bg-gradient-to-b from-[#1100CF] to-[#9308E8] shadow-xl mr-3 ${isAdvancedEnabled ? '' : 'opacity-50 pointer-events-none'}`}>
          <figure><img className="mt-3" src={chart3} alt="chart" /></figure>
          <div className="card-body text-center">
            <h2 className="text-white">AVANZADO</h2>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Card;


































