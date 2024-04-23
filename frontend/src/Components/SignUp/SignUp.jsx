import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import SocialMediaForm from '../SocialMediaForm/SocialMediaForm'
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi2";

const SignUp = () => {

    const navigate = useNavigate()

    const { handleSubmit, register, formState: { errors } } = useForm()

    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessageServer, setErrorMessageServer] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessageUsername, setErrorMessageUsername] = useState('')
    const [sendMesagge, setSendMesagge] = useState('ENVIAR')
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        data.objective_id = "1"
        try {
            setSendMesagge('REGISTRANDO')
            setLoading(true)
            await axios.get('/sanctum/csrf-cookie')
            const result = await axios.post('https://entrenaconmigo-api.vercel.app/api/api/register', data, { headers: { 'Accept': 'application/json' } })
            const response = result.data
            if (!response.error) {
                setSuccessMessage(response.message)
                setTimeout(() => {
                    navigate('/iniciar-sesion')
                }, 2500)
            }
        } catch (error) {
            setSendMesagge('ENVIAR')
            setLoading(false)
            if (error.response.status === 422) {
                const responseData = error.response.data
                setErrorMessageEmail(responseData.errors.email[0])
                setErrorMessageUsername(responseData.errors.username[0])
                setTimeout(() => {
                    setErrorMessageEmail('')
                setErrorMessageUsername('')
                }, 3000)
            } else {
                console.log(error)
                setErrorMessageServer('Hubo un problema al registrarte. Por favor, intenta más tarde.')
            }
        }
    }

    return (
        <section className='relative px-3 pt-3 pb-6 flex justify-center'>
            <form method='post' onSubmit={handleSubmit(onSubmit)} className='border-2 border-[#9308E8] px-5 py-4 bg-[#131429] rounded-md text-[#FAFAFA] md:w-[60%] md:px-12 lg:w-[45%] xl:px-16'>
                <h1 className='text-[1.5rem] text-center font-medium mb-3 xl:text-[1.7rem]'>Registro</h1>
                <p className=' text-center text-sm mb-3'>Puedes crear tu usuario o si ya tienes una cuenta puedes <Link to='/iniciar-sesion' className='text-[#CE1CFF]'>INGRESAR AQUÍ</Link></p>
                <div className=' space-y-8 py-5'>
                    <div className=' relative'>
                        <label htmlFor="name" className=' label-form'>Nombre</label>
                        <CiUser className='input-icon-form' />
                        <input
                            className='input-form'
                            autoComplete='off'
                            type="text"
                            name="name"
                            id="name"
                            {...register('name', {
                                required: 'Coloca tu nombre completo',
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: 'El nombre no debe tener números ni caracteres especiales.',
                                },
                                minLength: { value: 3, message: 'El nombre debe tener entre 3 y 25 caracteres' },
                                maxLength: { value: 25, message: 'El nombre no debe superar los 25 caracteres' },
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors.name && errors.name.message}</span>
                    </div>
                    <div className=' relative'>
                        <label htmlFor="email" className=' label-form'>Email</label>
                        <AiOutlineMail className='input-icon-form' />
                        <input
                            className='input-form'
                            autoComplete='off'
                            type="email"
                            name="email"
                            id="email"
                            {...register('email', {
                                required: 'Coloca tu dirección de correo',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Correo electrónico inválido',
                                },
                                maxLength: { value: 50, message: 'El email no debe superar los 50 caracteres' },
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors.email && errors.email.message}</span>
                    </div>
                    <div className=' relative'>
                        <label htmlFor="username" className=' label-form'>Usuario</label>
                        <CiUser className='input-icon-form' />
                        <input
                            className='input-form'
                            placeholder=''
                            autoComplete='off'
                            type="text"
                            name="username"
                            id="username"
                            {...register('username', {
                                required: 'Crea un nombre de usuario',
                                minLength: { value: 3, message: 'El nombre de usuario debe tener entre 3 y 25 caracteres' },
                                maxLength: { value: 25, message: 'El nombre de usuario no debe superar los 25 caracteres' },
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors.username && errors.username.message}</span>
                    </div>
                    <div className=' relative'>
                        <label htmlFor="password" className='label-form'>Contraseña</label>
                        <HiOutlineLockClosed className='input-icon-form' />
                        <input
                            className='input-form'
                            autoComplete='off'
                            type="password"
                            name="password"
                            id="password"
                            {...register('password', {
                                required: 'Crea una contraseña',
                                minLength: { value: 8, message: 'La contraseña debe tener entre 8 y 25 caracteres' },
                                maxLength: { value: 25, message: 'La contraseña no debe superar los 25 caracteres' },
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors.password && errors.password.message}</span>
                    </div>
                    <div className=' relative'>
                        <label htmlFor="password_confirmation" className='label-form'>Confirmar contraseña</label>
                        <HiOutlineLockClosed className='input-icon-form' />
                        <input
                            className='input-form'
                            autoComplete='off'
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            {...register('password_confirmation', {
                                required: 'Repite la contraseña',
                                minLength: { value: 8, message: 'La contraseña debe tener entre 8 y 25 caracteres' },
                                maxLength: { value: 25, message: 'La contraseña no debe superar los 25 caracteres' },
                                validate: (value) => value === document.getElementById('password').value || 'Las contraseñas no coinciden'
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors['password_confirmation'] && errors['password_confirmation'].message}</span>
                    </div>
                </div>
                {successMessage && <p className='bg-green-600 p-1 rounded-md text-center'>{successMessage}</p>}
                <div className=' text-center space-y-2'>
                    {errorMessageEmail && <p className='bg-red-600 p-1 rounded-md text-sm'>{errorMessageEmail}</p>}
                    {errorMessageUsername && <p className='bg-red-600 p-1 rounded-md text-sm'>{errorMessageUsername}</p>}
                    {errorMessageServer && <p className='bg-red-600 p-1 rounded-md text-sm'>{errorMessageServer}</p>}
                </div>
                <button type="submit" className='w-full flex justify-center items-center mt-3 py-2 text-sm rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]'>
                {sendMesagge}
                { loading && <span className="loading loading-spinner loading-md ml-3"></span>}
                </button>
                <SocialMediaForm label='O puedes registrarte con tu cuenta' />
            </form>
        </section>

    )
}

export default SignUp