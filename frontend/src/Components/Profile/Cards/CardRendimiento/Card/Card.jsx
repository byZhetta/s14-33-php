import React from 'react'

const Card = ({ title, children, className, style }) => {
    return (
      <div
        className={`card w-[500px] h-[300px] mr-9 ${className}`}
        style={style}
      >
        {title && <h2 className="card-title text-white ml-9 mt-3">{title}</h2>}
        <div className="card-body">{children}</div>
      </div>
    );
};
  
  export default Card;