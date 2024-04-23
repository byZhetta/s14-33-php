import React from 'react'
import { Link } from 'react-router-dom';
import Image1 from './assets/ejercicio-actual.png';
import Image2 from './assets/completado1.png';
import Image3 from './assets/completado2.png';


const ExerciseHistory = () => {
    return (
        <section className=' space-y-4 pb-6'>
            <h2 className='text-xs lg:text-sm xl:text-base text-white dark:text-black '>HISTORIAL DE EJERCICIOS</h2>
            <div className="carousel carousel-center space-x-6 w-full flex items-center">
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-color3 dark:bg-color4 lg:w-72 xl:w-80">
                        <figure ><img src={Image1} alt="Ejercicio actual" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm text-white dark:text-black">EJERCICIO ACTUAL</h2>
                            <p className="text-white dark:text-black">Descripción:</p>
                            <p className=' text-xs lg:text-sm text-white dark:text-black '>Abre tus piernas hasta el ancho de tus hombros. Junta tus manos o estira tus brazos en un ángulo de 90 grados. Cuando vayas a bajar, mantén los glúteos hacia atrás. Haz como si fueras a sentarte en una silla imaginaria. Es importante que las rodillas no sobrepasen la punta de tus pies, siempre deben quedaar por detrás. Debes intentar mantener la espalda erguida en todo momento y evitar inclinarte demasiado hacia adelante.</p>
                            <div className="card-actions justify-end">
                                <Link to="/ejercicios-en-curso" className="py-2 px-6 rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]">IR</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-color3 dark:bg-color4 lg:w-72 xl:w-80">
                        <figure><img className=' w-full' src={Image2} alt="Completado" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm text-white dark:text-black ">Completado</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-color3 dark:bg-color4 lg:w-72 xl:w-80">
                        <figure><img className=' w-full' src={Image3} alt="Completado" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm text-white dark:text-black ">Completado</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseHistory