import React from 'react'
import logo from '../Home/assets/logo.png'
import NavbarDesktop from '../../components/Navbar/NavbarDesktop';
import Avatar from '../../components/Profile/Avatar/Avatar';
import CardProgreso from '../../components/Profile/Cards/CardProgreso/CardProgreso';

const Perfil = () => {
  return (
    <section>
      <NavbarDesktop/>
      <section className="flex justify-end">
        <img src={logo} className="w-32 -mr-3 lg:w-48 xl:w-64" title="Entrena Conmigo" alt="Logo de Entrena Conmigo" />
      </section>
      <Avatar />
      <CardProgreso />
        <div className="titulo">
          HOME OBJETIVO PERFIL AJUSTES RESUMEN PROGRESO PERSONAL
        </div>
        <div className="card-grande">
          <div className="contenido-card">
            <div>
              ¡SEMANA COMPLETA!
            </div>
          </div>
        </div>
        <div className="titulo">
          Días de mayor rendimiento
        </div>
        <div className="mini-tarjetas">
        </div>
        <div className="card-izquierda">
          <div className="titulo-card">
            Nivel Principiante
          </div>
          
          <div className="botones">
            <button>Pecho</button>
            <button>Cintura</button>
            <button>Hip</button>
          </div>
          <button className="boton-guardar">
            Guardar
          </button>
        </div>
        <div className="card-derecha">
          <div className="titulo-card">
            Rendimiento semanal
          </div>
          <div className="grafico-circular">

          </div>
        </div>
        <div className="ejercicios-realizados">
          <div className="titulo">
            EJERCICOS REALIZADOS
          </div>
          <div className="tarjeta-1">
          </div>
          <div className="tarjeta-2">
          </div>
        </div>
    </section>
  )
}

export default Perfil;