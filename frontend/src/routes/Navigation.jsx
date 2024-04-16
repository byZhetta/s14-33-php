import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Objetivos from '../pages/Objetivos/Objetivos';
import Perfil from '../pages/Perfil/Perfil';
import EjerciciosEnCurso from '../pages/EjerciciosEnCurso/EjerciciosEnCurso';
import Ajustes from '../pages/Ajustes/Ajustes';
import PageLayout from '../layout/PageLayout/PageLayout';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout><Home /></PageLayout> ,
    },
    {
        path: "/objetivos",
        element: <PageLayout><Objetivos /></PageLayout>, 
    },
    {
        path: "/perfil",
        element: <PageLayout><Perfil /></PageLayout>,
    },
    {
        path: "/ejercicios-en-curso",
        element: <PageLayout><EjerciciosEnCurso /></PageLayout>, 
    },
    {
        path: "/ajustes",
        element: <PageLayout><Ajustes /></PageLayout>, 
    },
]);

const Navigation = () => {
    return <RouterProvider router={routes} />;
  };
  
export default Navigation;