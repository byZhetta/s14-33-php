import React from 'react';

const Guardar = () => {
  return (
    <div role="alert" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full alert alert-success w-[500px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>¡Tus preferencias han sido guardadas con éxito!</span>
    </div>
  )
}

export default Guardar;