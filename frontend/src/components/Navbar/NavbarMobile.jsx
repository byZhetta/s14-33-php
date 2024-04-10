import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { GiBiceps } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";

const NavbarMobile = () => {
    return (
        <nav className=' fixed left-0 bottom-0 w-full py-3 bg-red-500 text-white bg-gradient-to-r from-[#1100CF] to-[#9308E8] z-50 lg:hidden'>
            <ul className='flex justify-around items-center text-xl'>
                <li className='rounded-full p-1.5 hover:bg-[#16116F]'><IoMdSettings /></li>
                <li className='rounded-full p-1.5 hover:bg-[#16116F]'><GiStrong /></li>
                <li className='rounded-full p-1.5 hover:bg-[#16116F]'><GiBiceps /></li>
                <li className='rounded-full p-1.5 hover:bg-[#16116F]'><AiFillHome /></li>
            </ul>
        </nav>
    )
}

export default NavbarMobile