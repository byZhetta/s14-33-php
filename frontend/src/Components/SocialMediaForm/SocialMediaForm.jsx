import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialMediaForm = ({ label }) => {
    return (
        <section className='py-6 mt-8 space-y-4'>
            <p className=' text-[#B5B5B5] text-center text-sm'>{label}</p>
            <div className=' flex justify-center items-center text-xl space-x-5'>
                <BsFacebook className=' text-blue-600 bg-white rounded-full' />
                <BsApple className=' text-white' />
                <FcGoogle />
            </div>
        </section>
    )
}

export default SocialMediaForm