import React from 'react'

const PersonalProgress = () => {
    return (
        <section className='pb-20 space-y-4'>
            <h2 className='text-xs lg:text-sm xl:text-base'>RESUMEN PROGRESO PERSONAL</h2>
            <section className=' flex flex-col gap-3 md:flex-row'>
                <div className="card w-full bg-color3 dark:bg-color4 border border-[#9308E8] xl:w-[30%]">
                    <div className="card-body p-3">
                        <h2 className="card-title text-[1rem] text-white dark:text-black ">Repeticiones: 10/18</h2>
                        <small className="text-white dark:text-black">55% Completado</small>
                        <progress className="progress progress-secondary w-full bg-white" value="55" max="100"></progress>
                        <div className="card-actions justify-end mt-2">
                            <button className="text-sm py-2 px-6 rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]">Consultar</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-gradient-to-b from-[#1100CF] to-[#9308E8] xl:w-[40%]">
                    <div className="card-body p-3 ">
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col items-start space-y-3 text-xs mb-3'>
                                <h2 className="card-title text-[1rem]">Nivel Principiante</h2>
                                <p className='mb-3'>OBJETIVOS</p>
                                <div className=' space-x-1 mb-5'>
                                    <button className=' border rounded-md border-white py-1.5 px-2'>Pecho</button>
                                    <button className=' border rounded-md border-white py-1.5 px-2'>Cintura</button>
                                    <button className=' border rounded-md border-white py-1.5 px-2'>Cadera</button>
                                </div>
                            </div>
                            <div className="radial-progress text-secondary font-medium" style={{"--value":45}} role="progressbar">45%</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PersonalProgress