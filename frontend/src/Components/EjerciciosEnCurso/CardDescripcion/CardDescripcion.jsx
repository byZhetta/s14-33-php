import React from 'react'

function CardDescripcion() {
  return (
    <div className="card w-full md:w-96 bg-base-200 text-primary-content mx-auto md:ml-20 transform transition-transform hover:scale-110">
      <div className="card-body">
        <h2 className="card-title text-white">Nombre del ejercicio</h2>
        <p className="text-white">Descripción:</p>
        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam exercitationem enim minus repellat odit </p>
      </div>
    </div>
  );
}

export default CardDescripcion;