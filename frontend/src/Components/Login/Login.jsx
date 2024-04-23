import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import SocialMediaForm from '../SocialMediaForm/SocialMediaForm';
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi2";

const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [sendMesagge, setSendMesagge] = useState('ENVIAR');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setSendMesagge('INICIANDO SESIÓN');
            setLoading(true);
            await axios.get('/sanctum/csrf-cookie');
            const result = await axios.post('https://entrenaconmigo-api.vercel.app/api/api/login', data, { headers: { 'Accept': 'application/json' } });
            const response = result.data;
            if (!response.error) {
                setSuccessMessage(response.message);
                localStorage.setItem('name', response.data.user.name);
                localStorage.setItem('token', response.data.token);
                setTimeout(() => {
                    navigate('/panel');
                }, 1500);
            }
        } catch (error) {
            setSendMesagge('ENVIAR');
            setLoading(false);
            setErrorMessage('Datos incorrectos. Por favor, verifica tus credenciales');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }
    };

    return (
        <section className='relative px-3 pt-3 pb-6 flex justify-center items-center'>
            <form method='post' onSubmit={handleSubmit(onSubmit)} className='border-2  border-[#9308E8] px-5 py-4 bg-[#131429] rounded-md text-[#FAFAFA] md:w-[60%] md:px-12 lg:w-[45%] xl:px-16'>
                <h1 className='text-[1.5rem] text-center font-medium mb-3 xl:text-[1.7rem]'>Iniciar sesión</h1>
                <p className=' text-center text-sm mb-3'>Puedes ingresar con tu usuario y contraseña o puedes <Link to='/crear-cuenta' className='text-[#CE1CFF]'>GENERAR TU USUARIO AQUÍ</Link></p>
                <div className=' space-y-10 py-5'>
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
                        <label htmlFor="password" className='label-form'>Contraseña</label>
                        <HiOutlineLockClosed className='input-icon-form' />
                        <input
                            className='input-form'
                            autoComplete='off'
                            type="password"
                            name="password"
                            id="password"
                            {...register('password', {
                                required: 'Contraseña requerida',
                                minLength: { value: 8, message: 'La contraseña debe tener entre 8 y 25 caracteres' },
                                maxLength: { value: 25, message: 'La contraseña no debe superar los 25 caracteres' },
                            })}
                        />
                        <span className='text-xs text-start w-full text-red-600 pb-3 xl:text-sm'>{errors.password && errors.password.message}</span>
                    </div>
                </div>
                <div className=' flex items-center justify-between flex-wrap my-5'>
                    <div className=' space-x-1'>
                        <input type="checkbox" name="remember-user" id="remember-user" />
                        <label htmlFor="remember-user" className=' text-sm'>Recordar usuario</label>
                    </div>
                    <div>
                        <small>¿Olvidaste la contraseña?</small>
                    </div>
                </div>
                {successMessage && <p className='bg-green-600 p-1 rounded-md text-center'>{successMessage}</p>}
                {errorMessage && <p className='bg-red-600 p-1 rounded-md text-center text-sm'>{errorMessage}</p>}
                <button type="submit" className='w-full flex justify-center items-center mt-3 py-2 text-sm rounded-full bg-gradient-to-r from-[#1100CF] to-[#9308E8]'>
                    {sendMesagge}
                    {loading && <span className="loading loading-spinner loading-md ml-3"></span>}
                </button>
                <SocialMediaForm label='Ingresa con tu cuenta de' />
            </form>
        </section>
    );
};

export default Login;