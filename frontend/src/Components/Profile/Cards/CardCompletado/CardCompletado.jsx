import React from 'react';
import completado1 from '../CardCompletado/assets/completado1.png';
import completado2 from '../CardCompletado/assets/completado2.png';

const CardCompletado = () => {
  return (
    <section className="flex px-3 flex-col justify-around items-center flex-wrap pt-4 space-y-3 md:flex-row md:justify-start md:space-x-2 md:space-y-0">
      <div className="card bg-[#232442] w-[12rem] shadow-xl">
        <figure><img src={completado1} alt="Shoes" /></figure>
        <div className="p-2">
          <h2 className="card-title text-white text-sm p-2">Completado</h2>
        </div>
      </div>
      <div className="card bg-[#232442] w-[12rem] shadow-xl">
        <figure><img src={completado2} alt="Shoes" /></figure>
        <div className="p-2">
          <h2 className="card-title text-white text-sm p-2">Completado</h2>
        </div>
      </div>
    </section>
  )
}

export default CardCompletado;