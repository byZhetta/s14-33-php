import React from 'react'
import GrupoMus1 from '../assets/GrupoMus/GrupoMus1';
import GrupoMus2 from '../assets/GrupoMus/GrupoMus2';

const CardFatigaMuscular = () => {
  return (
    <div className="max-w-2x1 mx-auto  mt-3 mr-32 ml-44">
      <div className="card lg:card-side bg-color3 dark:bg-color4 shadow-xl">
        <div className="flex items-center justify-between"> 
          <div className="mr-20 ml-32">
            <GrupoMus1 />
          </div>
          <div className="ml-20">
            <GrupoMus2 />
          </div>
        </div>
        <div>
          <h2 className="text-xl mt-5 font-bold ml-10 text-white dark:text-black ">Título de la fatiga muscular</h2>
          <p className="mt-10 ml-10 text-white dark:text-black ">Descripción de la fatiga muscular</p>
        </div>
      </div>
    </div>
  );
};

export default CardFatigaMuscular;