import React from 'react'
import Card from './Card/Card';
import Objetivos from './Objetivos/Objetivos';
import RendimientoCard from './RendimientoCard/RendimientoCard';

const CardRendimiento = () => {
  return (
      <section className="flex flex-col items-start justify-center px-3 space-y-3 md:flex-row md:justify-around md:items-center md:space-x-4">
          <Card title="Nivel Principiante" className="bg-gradient-to-b from-[#1100CF] to-[#9308E8] space-y-3">
              <p className="text-white text-sm xl:text-base">Entrenamiento diario de 30 a 40 minutos con ejercicios simples. La clave está en las repeticiones!</p>
              <Objetivos />
              <div className="card-actions justify-end mt-4">
                <button className="py-2 px-5 bg-gray-800 rounded-full text-sm text-white">Cambiar</button>
              </div>
          </Card>
          <RendimientoCard />
      </section>
  );
};

export default CardRendimiento;