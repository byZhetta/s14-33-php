import React from 'react'
import Card from './Card/Card';
import Objetivos from './Objetivos/Objetivos';
import RendimientoCard from './RendimientoCard/RendimientoCard';

const CardRendimiento = () => {
  return (
      <section className="flex justify-center pt-10">
          <Card title="Nivel Principiante" className="bg-gradient-to-b from-[#1100CF] to-[#9308E8] transform transition-transform hover:scale-110">
              <p className="text-white">
                  Entrenamiento diario de 30 a 40 minutos con ejercicios simples. La clave está en las repeticiones!
              </p>
              <Objetivos />
              <div className="card-actions justify-end">
                  <button className="btn bg-primary-content text-white">Cambiar</button>
              </div>
          </Card>
          <RendimientoCard />
      </section>
  );
};

export default CardRendimiento;