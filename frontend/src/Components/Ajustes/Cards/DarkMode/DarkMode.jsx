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
    <section className="">
      <div className="card bg-color3 dark:bg-color4 border border-[#9308E8] shadow-xl lg:w-[20rem]">
        <div className="flex items-center justify-between p-3">
          <h2 className="card-title text-white dark:text-black text-sm xl:text-base">{darkMode ? 'MODO OSCURO' : 'MODO CLARO'}</h2>
          <input type="checkbox" className="toggle" checked={darkMode} onChange={toggleDarkMode} />
        </div>
      </div>
    </section>
  );
}

export default DarkMode;