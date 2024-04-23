import React from 'react';
import Card from '../../components/Objetivos/Card/card.jsx';
import Buttons from '../../components/Objetivos/Buttons/buttons.jsx';
import Buttons2 from '../../components/Objetivos/Buttons/buttons2.jsx';
import ButtonSave from '../../components/Objetivos/Buttons/buttonSave.jsx';

const Objetivos = () => {
  return (
    <section className="bg-color1 dark:bg-color2 min-h-screen flex flex-col justify-start items-center text-white pt-9 px-3 lg:pl-28">
      <Card />
      <Buttons />
      <Buttons2 />
      <ButtonSave />
    </section>
  );
};

export default Objetivos;