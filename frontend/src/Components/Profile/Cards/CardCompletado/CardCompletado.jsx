import React from 'react';
import completado1 from '../CardCompletado/assets/completado1.png';
import completado2 from '../CardCompletado/assets/completado2.png';

const CardCompletado = () => {
  return (
    <section className="flex justify-center pt-10">
        <div className="card mb-5 w-[288px] h-[268] bg-base-200 shadow-xl mr-6 transform transition-transform hover:scale-110 ">
            <figure><img src={completado1} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title text-white">Completado</h2>
            </div>
        </div>
        <div className="card mb-5 w-[288px] h-[268] bg-base-200 shadow-xl transform transition-transform hover:scale-110">
            <figure><img src={completado2} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">Completado</h2>
            </div>
        </div>
    </section>
  )
}

export default CardCompletado;