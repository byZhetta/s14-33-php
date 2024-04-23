import React, { useState, useEffect } from 'react';
import DarkMode from '../../components/Ajustes/Cards/DarkMode/DarkMode';
import SendNotifications from '../../components/Ajustes/Cards/SendNotifications/SendNotifications';
import AudibleAlert from '../../components/Ajustes/Cards/AudibleAlert/AudibleAlert';
import DefineRestTime from '../../components/Ajustes/Cards/DefineRestTime/DefineRestTime';
import DefineExerciseTime from '../../components/Ajustes/Cards/DefineExerciseTime/DefineExerciseTime';
import Button from '../../components/Ajustes/Button/Button';

const Ajustes = () => {
  const [darkMode, setDarkMode] = useState(false);
 
  const [darkModeSaved, setDarkModeSaved] = useState(false);

  
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  const handleSaveDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    setDarkModeSaved(true);
  };

  return (
    <section className="bg-color1 min-h-screen dark:bg-color2 pt-2 px-4 pb-24 lg:pl-28">
      <div className='md:flex justify-center'>
        <div className=' space-y-3 md:w-[80%] lg:w-[100%] lg:flex flex-wrap items-center justify-around lg:gap-8 xl:gap-12'>
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <SendNotifications />
          <AudibleAlert />
          <DefineRestTime />
          <DefineExerciseTime />
        </div>
      </div>
      <Button onClick={handleSaveDarkMode} />
      {darkModeSaved && <p>Modo oscuro guardado</p>}
    </section>
  );
}

export default Ajustes;