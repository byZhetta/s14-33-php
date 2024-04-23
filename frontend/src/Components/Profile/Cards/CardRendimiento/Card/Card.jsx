import React from 'react'

const Card = ({ title, children, className, style }) => {
    return (
      <div
        className={`card p-3 ${className}`}
        style={style}
      >
        {title && <h2 className=" text-white xl:text-lg">{title}</h2>}
        <div >{children}</div>
      </div>
    );
};
  
  export default Card;