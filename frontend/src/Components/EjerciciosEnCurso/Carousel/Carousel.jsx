import React from 'react';
import Card from './CardCarousel';
import sugerencia1 from '../assets/Carousel/sugerencia1.png';
import sugerencia2 from '../assets/Carousel/sugerencia2.png';
import sugerencia3 from '../assets/Carousel/sugerencia3.png';
import sugerencia4 from '../assets/Carousel/sugerencia4.png';

const Carousel = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start lg:justify-center xl:justify-between mt-6 ml-24 mr-20">
      <Card imageSrc={sugerencia1} title="Sugerencia 1" />
      <Card imageSrc={sugerencia2} title="Sugerencia 2" />
      <Card imageSrc={sugerencia3} title="Sugerencia 3" />
      <Card imageSrc={sugerencia4} title="Sugerencia 4" />
    </div>
  );
};

export default Carousel;