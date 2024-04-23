import React, { useEffect, useState } from 'react';
import ExerciseHistory from '../../components/ExerciseHistory/ExerciseHistory';
import PersonalProgress from '../../components/PersonalProgress/PersonalProgress';

const Home = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setUsername(storedName);
        }
    }, []);

    return (
        <section className='bg-color1 dark:bg-color2 w-full text-white pt-2 px-3 lg:pl-28'>
            <h1 className='mb-6 font-medium lg:text-lg xl:text-xl text-white dark:text-black '>
                {username ? `BIENVENIDO ${username.toUpperCase()}` : 'BIENVENIDO'}
            </h1>
            <ExerciseHistory />
            <PersonalProgress />
        </section>
    );
};

export default Home;