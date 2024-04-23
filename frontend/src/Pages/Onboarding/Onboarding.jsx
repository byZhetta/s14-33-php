import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/logo.png'
import videoOnboardingDesktop from './assets/Entrena conmigo-onboarding1.mp4'
import videoOnboardingMobile from './assets/onboarding-movil1.mp4'

const Onboarding = () => {
    return (
        <section className='bg-[#131429] text-white'>
            <nav className=' flex items-center justify-between py-2 md:px-6 lg:justify-end'>
                <div className='flex items-center ml-3 space-x-2 text-xs lg:text-sm lg:space-x-6'>
                    <Link to='/crear-cuenta'>REGISTRARSE</Link>
                    <Link to='/iniciar-sesion'>INICIAR SESIÓN</Link>
                </div>
                <img src={Logo} className='w-32 lg:w-48 xl:w-64' title='Entrena Conmigo' alt="Logo de Entrena Conmigo" />
            </nav>
            <div className=' flex justify-center items-center'>
                <video className="h-screen w-full object-fill lg:hidden" autoPlay loop muted>
                    <source src={videoOnboardingMobile} type="video/mp4" />
                </video>
                <video className="h-screen object-fill hidden lg:block" autoPlay loop muted>
                    <source src={videoOnboardingDesktop} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Onboarding