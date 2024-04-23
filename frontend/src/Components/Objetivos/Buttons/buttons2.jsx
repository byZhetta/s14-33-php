import React from 'react';

const Buttons2 = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-wrap mt-20 ">
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white  mr-9 mb-2">ABDOMEN<input type="radio" name="radio-1" className="radio" checked /></button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">GLÚTEOS<input type="radio" name="radio-1" className="radio" checked /></button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">INTEGRAL<input type="radio" name="radio-1" className="radio" checked /></button>
      </div>
    </section>
  );
};

export default Buttons2;