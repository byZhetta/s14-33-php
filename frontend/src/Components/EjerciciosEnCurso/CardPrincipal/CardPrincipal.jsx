import React from 'react';
import videoEjercicio from '../assets/video/videoEjercicio.mp4';

const CardPrincipal = () => {
  return (
    <div className="hero mt-9 ml-10 mb-8 min-h-screen bg-color3 dark:bg-color4">
      <div className="hero-content text-center">
        <video
          className="w-full"
          controls
        >
          <source src={videoEjercicio} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default CardPrincipal;