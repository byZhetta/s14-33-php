import React, { useState, useEffect } from 'react';
import DarkMode from '../../components/Ajustes/Cards/DarkMode/DarKmode';
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
    <section className="bg-color1 dark:bg-color2 w-[1280] h-[1784] pt-2 px-4 lg:pl-28 ">
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <SendNotifications />
      <AudibleAlert />
      <DefineRestTime />
      <DefineExerciseTime />
      <Button onClick={handleSaveDarkMode} />
      {darkModeSaved && <p>Modo oscuro guardado</p>}
    </section>
  );
}

export default Ajustes;