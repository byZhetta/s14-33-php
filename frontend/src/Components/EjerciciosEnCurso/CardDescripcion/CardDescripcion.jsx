import React, { useState, useEffect } from 'react';

function CardDescripcion() {
  const [exerciseData, setExerciseData] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch('https://entrenaconmigo-api.vercel.app/api/api/exercises/1', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        const jsonData = await response.json();
        setExerciseData(jsonData.data);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchExerciseData();
  }, []);

  return (
    <div className="card w-full md:w-96 bg-color3 dark:bg-color4 text-primary-content mx-auto md:ml-24 transform transition-transform hover:scale-110">
      <div className="card-body">
        {exerciseData ? (
          <>
            <h2 className="card-title text-white dark:text-black">{exerciseData.name}</h2>
            <p className="text-white dark:text-black">Descripción: {exerciseData.description}</p>
          </>
        ) : (
          <p className="text-white dark:text-black">Cargando datos del ejercicio...</p>
        )}
      </div>
    </div>
  );
}

export default CardDescripcion;