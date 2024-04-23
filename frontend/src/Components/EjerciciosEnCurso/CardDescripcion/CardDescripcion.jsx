import React from 'react'

function CardDescripcion() {
  return (
    <div className="card w-full md:w-96 bg-color3 dark:bg-color4 text-primary-content mx-auto md:ml-24 transform transition-transform hover:scale-110">
      <div className="card-body">
        <h2 className="card-title text-white dark:text-black">Nombre del ejercicio</h2>
        <p className="text-white dark:text-black">Descripción:</p>
        <p className="text-white dark:text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim minus repellat odit </p>
      </div>
    </div>
  );
}

export default CardDescripcion;