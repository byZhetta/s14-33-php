import React from 'react'
import NavbarMobile from '../../components/Navbar/NavbarMobile'
import NavbarDesktop from '../../components/Navbar/NavbarDesktop'
import Logo from './assets/logo.png'
import ExerciseHistory from '../../components/ExerciseHistory/ExerciseHistory'
import PersonalProgress from '../../components/PersonalProgress/PersonalProgress'

const Home = () => {
    return (
        <section className='bg-[#131429] w-full text-white pt-2 px-3 lg:pl-28'>
            <NavbarMobile />
			<NavbarDesktop />
            <section className=' flex justify-end'>
                <img src={Logo} className='w-32 -mr-3 lg:w-48 xl:w-64' title='Entrena Conmigo' alt="Logo de Entrena Conmigo" />
            </section>
            <h1 className='mb-6 font-medium lg:text-lg xl:text-xl'>BIENVENIDO PEPITO</h1>
            <ExerciseHistory />
            <PersonalProgress />
        </section>
    )
}

export default Home