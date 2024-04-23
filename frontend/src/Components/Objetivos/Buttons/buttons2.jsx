import React, { useState } from 'react';

const Buttons2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-wrap mt-20">
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          ABDOMEN
          <input type="radio" name="radio-1" className="radio" value="ABDOMEN" checked={selectedOption === "ABDOMEN"} onChange={handleOptionChange} />
        </button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          GLÚTEOS
          <input type="radio" name="radio-1" className="radio" value="GLÚTEOS" checked={selectedOption === "GLÚTEOS"} onChange={handleOptionChange} />
        </button>
        <button className="btn btn-wide border-[#9308E8] bg-[#131429] text-white mr-9 mb-2">
          INTEGRAL
          <input type="radio" name="radio-1" className="radio" value="INTEGRAL" checked={selectedOption === "INTEGRAL"} onChange={handleOptionChange} />
        </button>
      </div>
    </section>
  );
};

export default Buttons2;