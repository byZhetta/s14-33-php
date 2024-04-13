import React from 'react'
import Logo from '../../Components/EjerciciosEnCurso/assets/Logo.png'
import CardPrincipal from '../../Components/EjerciciosEnCurso/CardPrincipal/CardPrincipal';
import CardDescripcion from '../../Components/EjerciciosEnCurso/CardDescripcion/CardDescripcion';
import ButtonCounterMinutes from '../../Components/EjerciciosEnCurso/ContadorMinutos/ButtonCounterMinutes';
import ButtonMarkAsDone from '../../Components/EjerciciosEnCurso/BotonMarcarRealizado/ButtonMarkAsDone';
import CardFatigaMuscular from '../../Components/EjerciciosEnCurso/CardFatigaMuscular/CardFatigaMuscular';
import Carousel from '../../Components/EjerciciosEnCurso/Carousel/Carousel'

const EjerciciosEnCurso = () => {
  return (
    <div className="container mx-auto p-12">
      <div className=" flex justify-between items-center mt-3 ml-2 mr-2 ">
        <div className="mt-6 ml-4 sm:ml-0 sm:mr-auto"> 
          <h1 className="text-2xl text-white font-bold mt-9 ml-20">Ejercicio</h1>
        </div>
      <img src={Logo} alt="Logo" className="w-48 h-auto object-contain mr-20" />
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
  )
}

export default EjerciciosEnCurso;