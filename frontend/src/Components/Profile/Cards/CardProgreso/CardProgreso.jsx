import React from 'react'
import CardItem from './CardItem/CardItem';

const CardProgreso = () => {
  return (
    <section className="mt-16 flex justify-center">
        <div className="card w-[1129px] h-[448px] lg:card-side bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-white">¡SEMAANA COMPLETA!</h2>
            <div className="relative ml-[600.84px]">
              <progress className="progress progress-secondary w-[363px] h-[37px]" value="40" max="100"></progress>
              <p className="text-white">55% Completed</p>
            </div>
            <div className="progress-section mt-[-35px]">
              <p className="text-white">Entrenamientos / Series  ______________ 1/2</p>
              <p className="text-white">Ejercicios     _______________________  8/15</p>
            </div>
            <div className="mt-9 ml-16">
              <h3 className="text-white">Días de mayor rendimiento</h3>
            </div>
            <div class="flex flex-row space-y-2 justify-center">
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