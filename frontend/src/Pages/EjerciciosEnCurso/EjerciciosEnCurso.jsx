import React from 'react'
import logo from '../../pages/Home/assets/logo.png';
import NavbarDesktop from '../../components/Navbar/NavbarDesktop';
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
        <NavbarDesktop />
        <div className=" flex justify-between items-center mt-3 ml-9 mr-1 ">
          <div className="mt-6 ml-4 sm:ml-0 sm:mr-auto"> 
            <h1 className="text-2xl text-white font-bold mt-9 ml-20">Ejercicio</h1>
          </div>
          <img src={logo} alt="Logo" className="w-48 h-auto object-contain mr-20" />
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