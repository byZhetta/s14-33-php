import React from 'react'
import NavbarMobile from '../../components/Navbar/NavbarMobile'
import NavbarDesktop from '../../components/Navbar/NavbarDesktop'
import Logo from './assets/logo.png'

const PageLayout = ({ children }) => {
    return (
        <>
            <NavbarMobile />
            <NavbarDesktop />
            <section className='bg-[#131429] flex justify-end'>
                <img src={Logo} className='w-32 lg:w-48 xl:w-64' title='Entrena Conmigo' alt="Logo de Entrena Conmigo" />
            </section>
            { children }
        </>
    )
}

export default PageLayout