import React from 'react'
import CardPrincipal from '../../components/EjerciciosEnCurso/CardPrincipal/CardPrincipal';
import CardDescripcion from '../../components/EjerciciosEnCurso/CardDescripcion/CardDescripcion';
import ButtonCounterMinutes from '../../components/EjerciciosEnCurso/ContadorMinutos/ButtonCounterMinutes';
import ButtonMarkAsDone from '../../components/EjerciciosEnCurso/BotonMarcarRealizado/ButtonMarkAsDone';
import CardFatigaMuscular from '../../components/EjerciciosEnCurso/CardFatigaMuscular/CardFatigaMuscular';
import Carousel from '../../components/EjerciciosEnCurso/Carousel/Carousel'

const EjerciciosEnCurso = () => {
  return (
    <section className="bg-[#131429] text-white">
      <div className="container mx-auto p-12">
        <div className="flex justify-between items-center mt-3 ml-9 mr-1 ">
          <div className="ml-4 sm:ml-0 sm:mr-auto"> 
            <h1 className="text-2xl text-white font-bold ml-20">Ejercicio</h1>
          </div>
        </div>
        <CardPrincipal />
        <CardDescripcion />
        <div className="flex flex-col sm:flex-row mt-12"> 
          <div className="sm:mr-4 mb-4 sm:mb-0"> 
            <ButtonCounterMinutes />
          </div>
          <div className="flex justify-center"> 
            <ButtonMarkAsDone />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-3 text-center text-white">Fatiga muscular</h2>
          <CardFatigaMuscular />
        </div>
        <h2 className="text-xl font-bold mt-6 text-center text-white">Ejercios sugeridos</h2>
        <Carousel />
      </div>
    </section>
    
  )
}

export default EjerciciosEnCurso;