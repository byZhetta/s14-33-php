import React from 'react'
import CardPrincipal from '../../components/EjerciciosEnCurso/CardPrincipal/CardPrincipal';
import CardDescripcion from '../../components/EjerciciosEnCurso/CardDescripcion/CardDescripcion';
import ButtonCounterMinutes from '../../components/EjerciciosEnCurso/ContadorMinutos/ButtonCounterMinutes';
import ButtonMarkAsDone from '../../components/EjerciciosEnCurso/BotonMarcarRealizado/ButtonMarkAsDone';
import CardFatigaMuscular from '../../components/EjerciciosEnCurso/CardFatigaMuscular/CardFatigaMuscular';
import Carousel from '../../components/EjerciciosEnCurso/Carousel/Carousel'

const EjerciciosEnCurso = () => {
  return (
    <section className="bg-color1 dark:bg-color2 text-white">
      <div className="container mx-auto p-6 sm:p-12">
        <div className="flex justify-center sm:justify-between items-center mt-3">
          <h1 className="text-2xl font-bold ml-11">Ejercicio</h1>
        </div>
        <CardPrincipal />
        <CardDescripcion />
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-12"> 
          <div className="sm:mr-4 mb-4 sm:mb-0"> 
            <ButtonCounterMinutes />
          </div>
          <div className="flex justify-center"> 
            <ButtonMarkAsDone />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-6 text-center">Fatiga muscular</h2>
          <CardFatigaMuscular />
        </div>
        <h2 className="text-xl font-bold mt-6 text-center">Ejercios sugeridos</h2>
        <Carousel />
      </div>
    </section>
  )
}

export default EjerciciosEnCurso;