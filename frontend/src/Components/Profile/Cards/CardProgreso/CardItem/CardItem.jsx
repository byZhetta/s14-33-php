import React from 'react'

const CardItem = ({ day, duration, progressValue }) => {
    return (
      <div className="w-[182px] h-[189px] mr-2 carousel rounded-box mt-2 bg-[#232442] border border-[#9308E8]">
        <div className="flex flex-col items-center justify-center content-between h-full">  
          <h4 className="text-center text-white text-xl mr-8 mt-3 font-bold">{day}</h4>  
          <p className="text-center text-white mr-9 mt-6">{duration}</p>  
          <p className="text-center text-white font-bold mr-6 mt-8">{progressValue}%</p>  
          <progress className="progress progress-secondary w-56 mb-4 h-4" value={progressValue} max="100"></progress> 
        </div>
      </div>
    );
}

export default CardItem;