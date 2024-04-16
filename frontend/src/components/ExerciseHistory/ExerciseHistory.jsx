import React from 'react'
import { Link } from 'react-router-dom';

const ExerciseHistory = () => {
    return (
        <section className=' space-y-4 pb-6'>
            <h2 className='text-xs lg:text-sm xl:text-base'>HISTORIAL DE EJERCICIOS</h2>
            <div className="carousel carousel-center space-x-6 w-full flex items-center">
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-[#232442] lg:w-72 xl:w-80">
                        <figure ><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm">EJERCICIO ACTUAL</h2>
                            <p>Descripción:</p>
                            <p className=' text-xs lg:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus fuga necessitatibus eligendi ea tempora id sint molestias soluta excepturi quo commodi, cum laboriosam praesentium sit magni esse, ex repellat!</p>
                            <div className="card-actions justify-end">
                                <Link to="/ejercicios-en-curso" className="py-2 px-6 rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]">IR</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-[#232442] lg:w-72 xl:w-80">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm">Completado</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-[#232442] lg:w-72 xl:w-80">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm">Completado</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card card-compact w-56 bg-[#232442] lg:w-72 xl:w-80">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xs lg:text-sm">Completado</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseHistory