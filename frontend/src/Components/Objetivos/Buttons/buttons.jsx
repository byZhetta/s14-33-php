import React from 'react';

const Buttons = () => {
  return (
    <section className="flex justify-center mt-10">
      <h1 className="mt-[10px] text-xl text-white dark:text-black font-bold">Preferencia muscular</h1>
      <div className="flex flex-wrap mt-20 ">
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          PECHO
          <input type="radio" name="radio-1" className="radio" defaultChecked />
        </button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          BRAZOS
          <input type="radio" name="radio-1" className="radio" />
        </button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          PIERNAS
          <input type="radio" name="radio-1" className="radio" />
        </button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          ESPALDA
          <input type="radio" name="radio-1" className="radio" />
        </button>
      </div>
    </section>
  );
};

export default Buttons;





















