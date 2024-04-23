import React from 'react'
import CardItem from './CardItem/CardItem';

const CardProgreso = () => {
  return (
    <section className="mb-4">
        <div className="card  dark:bg-color4 shadow-xl">
          <div className="p-3">
            <h2 className="text-white pb-3 dark:text-black xl:text-lg">¡SEMANA COMPLETA!</h2>
            <div className=' flex flex-col justify-center lg:flex-row lg:justify-between'>
              <div className="progress-section space-y-3 text-sm xl:text-base">
                <p className="text-white dark:text-black">Entrenamientos / Series  ______________ 1/2</p>
                <p className="text-white dark:text-black">Ejercicios     _______________________  8/15</p>
              </div>
              <div className="py-5 lg:w-[26rem] text-sm">
                <progress className="progress progress-secondary h-3 lg:h-5" value="40" max="100"></progress>
                <p className="text-white dark:text-black">55% Completed</p>
              </div>
            </div>
           <div className="">
              <h3 className="text-white dark:text-black">Días de mayor rendimiento</h3>
            </div>
            <div className="flex space-y-2 items-center justify-around flex-wrap lg:py-6">
              <CardItem day="DÍA 1" duration="26:50" progressValue={15} />
              <CardItem day="DÍA 2" duration="00:00" progressValue={0} />
              <CardItem day="DÍA 3" duration="38:40" progressValue={25} />
              <CardItem day="DÍA 4" duration="26:50" progressValue={15} />
              <CardItem day="DÍA 5" duration="00:00" progressValue={0} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default CardProgreso;