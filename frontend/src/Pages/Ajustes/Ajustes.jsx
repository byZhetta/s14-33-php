import React from 'react'
import DarkMode from '../../components/Ajustes/Cards/DarkMode/DarkMode';
import SendNotifications from '../../components/Ajustes/Cards/SendNotifications/SendNotifications';
import AudibleAlert from '../../components/Ajustes/Cards/AudibleAlert/AudibleAlert';
import DefineRestTime from '../../components/Ajustes/Cards/DefineRestTime/DefineRestTime';
import DefineExerciseTime from '../../components/Ajustes/Cards/DefineExerciseTime/DefineExerciseTime';
import Button from '../../components/Ajustes/Button/Button';

const Ajustes = () => {
  return (
    <section className="bg-[#131429] w-[1280] h-[1784] pt-2 px-4 lg:pl-28 ">
      <DarkMode />
      <SendNotifications />
      <AudibleAlert />
      <DefineRestTime />
      <DefineExerciseTime />
      <Button />
    </section>
  )
}

export default Ajustes;