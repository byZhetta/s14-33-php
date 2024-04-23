import React from 'react'
import Logo from './assets/logo.png'
import BackImage from './assets/man-training.png'
import { Link } from 'react-router-dom'

const LoginSignupLayout = ({ children, page, path }) => {

    const backgroundImage = `url(${BackImage})`

    return (
        <section className='bg-[#131429] min-h-screen bg-cover bg-center lg:pt-2' style={{ backgroundImage }}>
            <div className='h-[10vh] flex items-center justify-between md:px-6 lg:justify-end '>
                <Link to={path} className='ml-3 text-xs text-white lg:text-sm'>{page}</Link>
                <img src={Logo} className='w-32 lg:w-48 xl:w-64' title='Entrena Conmigo' alt="Logo de Entrena Conmigo" />
            </div>
            {children}
        </section>
    )
}

export default LoginSignupLayout