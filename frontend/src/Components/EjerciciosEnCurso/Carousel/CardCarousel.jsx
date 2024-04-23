import React from 'react';

const Card = ({ imageSrc, title }) => {
  return (
    <div className="flex-none w-[291.53px] h-[405.12px] bg-color3 dark:bg-color4 ml-6 shadow-xl rounded-xl cursor-pointer transform transition-transform hover:scale-110">
      <figure className="px-10 pt-10">
        <img src={imageSrc} alt={title} className="object-cover w-full h-full rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white dark:text-black ">{title}</h2>
      </div>
    </div>
  );
}

export default Card;