import React from 'react'

import Avatar from '../../components/Profile/Avatar/Avatar';
import CardProgreso from '../../components/Profile/Cards/CardProgreso/CardProgreso';
import CardRendimiento from '../../components/Profile/Cards/CardRendimiento/CardRendimiento';
import CardCompletado from '../../components/Profile/Cards/CardCompletado/CardCompletado';

const Perfil = () => {
  return (
    <section className="bg-color1 dark:bg-color2">
      <Avatar />
      <CardProgreso />
      <CardRendimiento />
      <CardCompletado />
    </section>
  )
}

export default Perfil;