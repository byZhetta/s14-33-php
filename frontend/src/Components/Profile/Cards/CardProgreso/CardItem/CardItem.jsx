import React from 'react'

const CardItem = ({ day, duration, progressValue }) => {
    return (
      <div className="rounded-box mt-2 w-[8rem] bg-[#232442] dark:bg-color4 border border-[#9308E8]">
        <div className="p-2 space-y-2">  
          <h4 className="text-center text-white dark:text-black font-bold">{day}</h4>  
          <p className="text-center text-white dark:text-black ">{duration}</p>  
          <p className="text-center text-white dark:text-black font-bold">{progressValue}%</p>  
          <progress className="progress progress-secondary h-2" value={progressValue} max="100"></progress> 
        </div>
      </div>
    );
}

export default CardItem;