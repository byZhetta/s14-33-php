import React from 'react';

const DarkMode = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <section className="mt-5 ml-36">
      <div className="card flex w-[505PX] h-[83px] bg-color3 dark:bg-color4 border border-[#9308E8] xl:w-[30%] shadow-xl relative">
        <div className="card-body">
          <h2 className="card-title ml-[50px] text-white dark:text-black ">{darkMode ? 'MODO OSCURO' : 'MODO CLARO'}</h2>
          <label className="absolute top-2 right-2">
            <input type="checkbox" className="toggle" checked={darkMode} onChange={toggleDarkMode} />
          </label>
        </div>
      </div>
    </section>
  );
}

export default DarkMode;