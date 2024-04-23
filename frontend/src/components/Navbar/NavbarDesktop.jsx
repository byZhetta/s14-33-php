import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { GiBiceps } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import navbarIcon from './assets/navbar-icon.svg'

const NavbarDesktop = () => {
	return (
		<section className='hidden lg:block'>
			<nav className=' fixed left-0 top-0 w-20 h-screen text-white bg-gradient-to-b from-[#1100CF] to-[#9308E8] overflow-hidden hover:w-44 transition-all z-50'>
				<img src={navbarIcon} className='w-16 pl-5 pt-6' title='Entrena Conmigo' alt="Logo de Entrena Conmigo" />
				<ul className=' flex flex-col pl-6 mt-28 space-y-5'>
					<li className='flex items-center space-x-5'>
						<div>
							<Link to="/panel">
								<AiFillHome className='text-4xl rounded-full p-1.5  hover:bg-[#16116F]' />
							</Link>	
						</div>
						<p className=' text-sm'>INICIO</p>
					</li>
					<li className='flex items-center space-x-5'>
						<div>
							<Link to="/objetivos">
								<GiBiceps className='text-4xl rounded-full p-1.5  hover:bg-[#16116F]' />
							</Link>
						</div>
						<p className=' text-sm'>OBJETIVO</p>
					</li>
					<li className='flex items-center space-x-5'>
						<div>
						 	<Link to="/perfil">
								<GiStrong className='text-4xl rounded-full p-1.5  hover:bg-[#16116F]' />
							</Link>
						</div>
						<p className=' text-sm'>PERFIL</p>
					</li>
					<li className='flex items-center space-x-5'>
						<div>
							<Link to="/ajustes">
								<IoMdSettings className='text-4xl rounded-full p-1.5  hover:bg-[#16116F]' />
							</Link>
						</div>
						<p className=' text-sm'>AJUSTES</p>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default NavbarDesktop