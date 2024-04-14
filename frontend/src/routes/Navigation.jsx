import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Objetivos from '../pages/Objetivos/Objetivos';
import Perfil from '../pages/Perfil/Perfil';
import EjerciciosEnCurso from '../pages/EjerciciosEnCurso/EjerciciosEnCurso';
import Ajustes from '../pages/Ajustes/Ajustes';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/objetivos",
        element: <Objetivos />, 
    },
    {
        path: "/perfil",
        element: <Perfil />,
    },
    {
        path: "/ejercicios-en-curso",
        element: <EjerciciosEnCurso />, 
    },
    {
        path: "/ajustes",
        element: <Ajustes />, 
    },
]);

const Navigation = () => {
    return <RouterProvider router={routes} />;
  };
  
export default Navigation;